'use client';

import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, ButtonGroup, Collapse, Flex, HStack, Heading, Hide, Icon, IconButton, Image, Link, ListItem, SimpleGrid, Stack, Text, UnorderedList, Wrap, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { NavItem, mainNavigation, sitecoreQuickLinks } from '@data/data-navigation';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import ProductIcon from 'ui/components/common/ProductIcon';
import { Slide } from 'ui/components/helpers/Slide';
import { GetProductLogoByVariant, Product, Type, Variant } from 'ui/lib/assets';
import { PreviewModeSwitch } from '../common/PreviewModeSwitch';
import { DarkModeSwitch } from './DarkModeSwitch';
import { QuickStartMenu } from './QuickStartMenu';
import { SearchButton } from './SearchButton';

export type NavigationChildData = {
  title: string;
  url?: string;
  external?: boolean;
  children?: NavigationChildData[];
};

export type NavigationData = {
  title: string;
  url?: string;
  children?: NavigationChildData[];
  pathname?: string;
};
export type NavProps = {
  navigationData: NavigationData[];
  sitecoreQuickLinks: NavigationData;
  children?: React.ReactNode | React.ReactNode[];
};

export type NavBarProps = {
  children?: React.ReactNode | React.ReactNode[];
};

export default function Navbar({ children }: NavBarProps): JSX.Element {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box layerStyle="section.topbar" shadow={'base'} zIndex={'sticky'} position="sticky" top="0">
      <Flex h="14" align={'center'} justify="space-between">
        <Stack direction={'row'} w="full" alignItems={'center'}>
          <HStack flexShrink={0}>
            {/* Logo */}
            <Link href="/">
              <Image
                p="1"
                h="8"
                w={'auto'}
                align="left"
                alt={'Go to the homepage'}
                src={useColorModeValue(GetProductLogoByVariant(Product.SitecoreDevelopers, Variant.Light, Type.Full), GetProductLogoByVariant(Product.SitecoreDevelopers, Variant.Dark, Type.Full))}
              />
            </Link>
          </HStack>
          {/* Desktop menu */}
          <Hide below="xl">
            <HStack>
              <DesktopNav />
            </HStack>

            {children && (
              <Hide below="2xl">
                <Flex grow={1} flexShrink={0} justify={'flex-end'} mr={12} ml={24}>
                  <Box display={'flex'} width={'full'} maxWidth={'2xl'}>
                    {children}
                  </Box>
                </Flex>
              </Hide>
            )}
          </Hide>
        </Stack>
        {/* Mobile menu button */}
        <Flex flex={{ base: 1, xl: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', xl: 'none' }}></Flex>

        <Flex flex={{ base: 2, xl: 0 }} justify={'flex-end'} direction={'row'}>
          <PreviewModeSwitch />
          <SearchButton />
          <DarkModeSwitch />
          <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} size="sm" variant={'ghost'} aria-label={'Toggle Navigation'} display={{ base: 'flex', xl: 'none' }} />
          <QuickStartMenu />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const router = useRouter();

  return (
    <Wrap direction={'row'}>
      {mainNavigation.map((navItem, key) => (
        <ButtonGroup variant="navigation" orientation="horizontal" spacing="4" mx="2" key={key} as={'li'}>
          <Box key={navItem.title} role="group">
            <Button key={key} as={NextLink} px={4} py={5} href={navItem.url ?? '#'} position={'relative'} isActive={router.asPath == navItem.url}>
              {navItem.title}
              {navItem.children && <Icon as={ChevronDownIcon} transition={'all .25s ease-in-out'} _hover={{ rotate: '180deg' }} w={6} h={6} />}
            </Button>
            <Box pos="absolute" top={'50px'} w="full" zIndex={998} display="none" _groupHover={{ display: 'block' }}>
              {navItem.children && (
                <Box width="100%" maxWidth={'5xl'} bg={useColorModeValue('white', 'gray.800')} shadow={'base'} transition={'all .25s ease-in-out'}>
                  <SimpleGrid columns={{ base: 1, md: 3, lg: 4 }} pos="relative" gap={{ base: 6, sm: 8 }} px={5} py={6} p={{ sm: 8 }}>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.title} {...child} />
                    ))}
                  </SimpleGrid>
                </Box>
              )}
            </Box>
          </Box>
        </ButtonGroup>
      ))}
    </Wrap>
  );
};

const navSection = ({ title, logo }: NavItem) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <>
      {logo && (
        <Box display={'inline'} marginRight={2} position={'relative'}>
          <ProductIcon product={logo} height={'20px'} width={'32px'} />
        </Box>
      )}
      <Text transition={'all .3s ease'} fontWeight={500} color={linkColor} fontSize={'lg'} mt={-1}>
        {title}
      </Text>
    </>
  );
};

const DesktopSubNav = ({ title, url, subTitle, external, children, logo }: NavItem) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box role={'group'} display={'block'} p={2} key={title}>
      {url ? (
        <Link as={NextLink} href={url ? url : '#'} isExternal={external} display={'flex'} gap={1} mb={2}>
          {navSection({ title, logo })}
        </Link>
      ) : (
        <Flex gap={1} mb={2}>
          {navSection({ title, logo })}
        </Flex>
      )}

      <Text fontSize={'sm'}>{subTitle}</Text>

      {children != null &&
        children.map((child, key) => (
          <Link as={NextLink} href={child.url} isExternal={child.external} display={'flex'} gap={1} py={2} color={linkColor} key={key}>
            {child.logo && (
              <Box display={'inline'} marginRight={2}>
                <ProductIcon product={child.logo} width={'24px'} height={'24px'} />
              </Box>
            )}
            {child.title}
            {child.external && <ExternalLinkIcon mx="2px" w={4} h={4} fillOpacity={0} mt={1} />}
          </Link>
        ))}
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Box bg={useColorModeValue('white', 'gray.800')} display={{ xl: 'none' }} shadow={'lg'} height={'100vh'} position={'absolute'} width={'full'}>
      {mainNavigation.map((navItem) => (
        <MobileNavItem key={navItem.title} {...navItem} />
      ))}
      <MobileNavItem title={sitecoreQuickLinks.title} key={sitecoreQuickLinks.title}>
        {sitecoreQuickLinks.children}
      </MobileNavItem>
    </Box>
  );
};

type MobileNavItemProps = {
  title: string;
  children?: Array<NavItem>;
  url?: string;
};

const MobileNavItem = ({ title, children, url }: MobileNavItemProps) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const router = useRouter();
  const currentPage = router.asPath;
  // const isCurrentPage = currentPage === url;
  // const currentRoute = router.pathname;

  return (
    <Stack onClick={children && onToggle}>
      <Flex
        px={4}
        py={4}
        as="a"
        href={url ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
        borderTop={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Text fontWeight={600}>{title}</Text>
        {children && <Icon as={ChevronRightIcon} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6} />}
      </Flex>

      <Slide in={isOpen}>
        <Box position={'fixed'} top={'7.5rem'} width={'full'} background={'chakra-body-bg'} height={'100vh'}>
          <Button leftIcon={<Icon as={ChevronLeftIcon} w={6} h={6} />} onClick={onClose} width={'full'} borderRadius={0} justifyContent={'left'} px={2} height={14} mb={4} shadow={'lg'}>
            Back
          </Button>
          <Stack mb={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
            {children &&
              children.map((child, key) => (
                <Box key={key} py={4} borderBottom={1} borderBottomStyle={'solid'} borderBottomColor={'chakra-border-color'} width={'95%'}>
                  {child.url ? (
                    <Box as="a" key={child.title} py={2} href={child.url}>
                      <Heading as="h2" size="lg" mb={2}>
                        {child.title}
                      </Heading>
                    </Box>
                  ) : (
                    <Box as="span" key={child.title} py={2}>
                      <Heading as="h2" size="lg" mb={2}>
                        {child.title}
                      </Heading>
                    </Box>
                  )}

                  <UnorderedList listStyleType={'none'} m={0}>
                    {child.children?.map((subchild, i) => (
                      <ListItem py={2} key={i}>
                        <Link as={NextLink} aria-current={currentPage === subchild.url} href={subchild.url} isExternal={subchild.external} key={i} color={'neutral.fg'}>
                          {subchild.title} {subchild.external && <Icon as={ExternalLinkIcon} fillOpacity={0} w={4} h={4} />}
                        </Link>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              ))}
          </Stack>
        </Box>
      </Slide>
    </Stack>
  );
};

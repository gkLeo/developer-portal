import { Box, Container, HStack, Link, Stack, Text, VisuallyHidden, chakra, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => (
  <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
    <Container as={Stack} maxW={'6xl'} py={4} px={2} direction={{ base: 'column', md: 'column' }} spacing={4}>
      <Stack direction={'row'} spacing={6}>
        <SocialButton label={'Twitter'} href={'#'}>
          <FaTwitter />
        </SocialButton>
        <SocialButton label={'YouTube'} href={'#'}>
          <FaYoutube />
        </SocialButton>
        <SocialButton label={'Instagram'} href={'#'}>
          <FaInstagram />
        </SocialButton>
      </Stack>

      <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
        <HStack>
          <Text>© Copyright 2023, Sitecore. All Rights Reserved</Text>
        </HStack>
        <HStack>
          <Text display={{ sm: 'none', md: 'block' }}>|</Text>
          <Link as={NextLink} href={'#'} target="_blank" title="Opens in new tab">
            <Text transition={'all .3s ease'} fontWeight={500} fontSize={'sm'}>
              Legal
            </Text>
          </Link>
          <Text>|</Text>
          <Link as={NextLink} href={'#'} target="_blank" title="Opens in new tab">
            <Text transition={'all .3s ease'} fontWeight={500} fontSize={'sm'}>
              Privacy
            </Text>
          </Link>
          <Text>|</Text>
          <Link as={NextLink} href={'#'} target="_blank" title="Opens in new tab">
            <Text transition={'all .3s ease'} fontWeight={500} fontSize={'sm'}>
              Get Help
            </Text>
          </Link>
          <Text>|</Text>
          <Link as={NextLink} href={'#'} target="_blank" title="Opens in new tab">
            <Text transition={'all .3s ease'} fontWeight={500} fontSize={'sm'}>
              Contribute
            </Text>
          </Link>
        </HStack>
      </Stack>
    </Container>
  </Box>
);

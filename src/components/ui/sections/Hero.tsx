import { Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

import { CenteredContent, VerticalGroup } from '@components/ui/sections';
import { GetProductLogo } from '../../../lib/assets';

import { GuidedDemo } from '../../links/GuidedDemo';

export type HeroProps = {
  title: string;
  description?: string;
  image?: string;
  productLogo?: string;
  demoId?: string;
  children?: React.ReactNode | Array<React.ReactNode>;
};

export const Hero = ({ description, title, children, productLogo, demoId }: HeroProps) => {
  return (
    <VerticalGroup
      maxWidth={'full'}
      borderBottom={'1px'}
      borderColor={'chakra-border-color'}
      background={useColorModeValue('linear-gradient(51deg,#dedbff -10%,#f9f9f9 40%,#f9f9f9 70%,#ffcfcf 120%)', 'linear-gradient(51deg, #2c2c4a -10%, #1a1a1a 40%, #1a1a1a 70%, #4a2c2c 120%)')}
    >
      <CenteredContent gap={2} py={{ base: 6, md: 12, xl: 16 }} direction={{ base: 'column', md: 'column' }}>
        {productLogo && <Image src={useColorModeValue(GetProductLogo(productLogo, 'Light'), GetProductLogo(productLogo, 'Dark'))} alt={`${title} logo`} width={'280'} height={'60'} />}
        {!productLogo && (
          <Heading as="h1" fontSize={{ base: '2xl', md: '4xl', xl: '6xl' }} fontFamily={'"DM Sans", sans-serif'} fontWeight={'400'}>
            {title}
          </Heading>
        )}
        <Text as="h2" color={'neutral'} fontSize={{ base: 'sm', md: 'xl' }} fontFamily={'"DM Sans", sans-serif'} fontWeight={'normal'} letterSpacing={'0.5'}>
          {description}
        </Text>
        {demoId && <GuidedDemo demoId={demoId} productName={title} productLogo={productLogo} />}
        {children}
      </CenteredContent>
    </VerticalGroup>
  );
};

export default Hero;

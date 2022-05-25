import { Box } from '@chakra-ui/react';
import React from 'react';

const PrincipalImage = () => {
  return (
    <Box
      style={{
        backgroundImage:
          'url(https://cdn.shopify.com/shopifycloud/shopify_dev/assets/home/hero-1-dark-91c0c835d494ced3d0530b1681f8499cdcd0d92f10828d4aa2f876ee8b7c9b5f.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 1,
      }}
      h="100%"
      w="100%"
    />
  );
};

export default PrincipalImage;

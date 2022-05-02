import { Button, Image } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';

const Logo = () => {
  const { themeSelected } = useContext(ThemeContext);

  console.log(themeSelected);

  return (
    <Button _hover={{ backgroundColor: 'none' }}>
      <Link to="/" fontWeight="bold">
        {themeSelected?.background === 'var(--background-dark)' ? (
          <Image
            src="https://cdn.shopify.com/shopifycloud/shopify_dev/assets/shopify-dev-logo-dark-ebe46baa056247a6245a8c2f3f5643850171ff8f505f2cb61303efe710b65390.svg"
            alt="Logo shopify"
            w="60px"
          />
        ) : (
          <Image
            src="https://cdn.shopify.com/shopifycloud/shopify_dev/assets/shopify-dev-logo-light-100da87d8ee35fb04600643ee9092181cdfb0f4b6db9a4b102b491788560c938.svg"
            alt="Logo shopify"
            w="60px"
          />
        )}
      </Link>
    </Button>
  );
};

export default Logo;

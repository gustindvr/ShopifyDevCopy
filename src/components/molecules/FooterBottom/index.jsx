import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import { linksFooterNav } from '../const';

const FooterBottom = () => {
  return (
    <Box
      p="1.5em 2em"
      borderRadius=" 0 0 1rem 1rem"
      m="0 2rem 0.3rem 2rem"
      background="var(--color-docs-background-surface-hover)"
    >
      {linksFooterNav.map(link => (
        <Link
          href={link.url}
          mr="1.5em"
          fontWeight="bold"
          fontSize="sm"
          color="var(--color-docs-text-subdued)"
          _hover={{ color: 'var(--background-light)' }}
          _focus={{ color: 'var(--background-light)' }}
        >
          {link.title}
        </Link>
      ))}
    </Box>
  );
};

export default FooterBottom;

import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    a: {
      _hover: { textDecoration: 'none' },
    },
  },
  components: {
    Button: {
      variants: {
        solid: props => ({
          fontSize: '14px',
          fontWeight: '400',
          bg: 'transparent',
          borderRadius: '10px',
          padding: '0 6px',
          height: '30px',
          _hover: {
            bg: '#20292B',
          },
        }),
      },
    },
    Link: {
      variants: {
        solid: props => ({
          color: 'var(--link-color)',
          textDecoration: 'underline',
        }),
      },
    },
  },
});

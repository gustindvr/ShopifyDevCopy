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
        cards: props => ({
          backgroundColor: 'var(--background-input-dark)',
          border: '0.5px solid var(--color-docs-border-default)',
          borderRadius: '10px',
          color: 'var(--background-light)',
          boxShadow: '0px 5px 0px -3px rgba(0, 0, 0)',
          padding: '30px',
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

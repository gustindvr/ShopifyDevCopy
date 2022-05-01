import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './components/contexts/ThemeContext';

import './styles/index.css';

const theme = extendTheme({
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
      defaultProps: {
        _hover: {},
      },
    },
  },
});

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

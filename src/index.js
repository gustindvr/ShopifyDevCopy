import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './components/contexts/ThemeContext';
import { theme } from './styles/customTheme';

import './styles/index.css';

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

import React, { useContext } from 'react';

import { Box, Grid, GridItem } from '@chakra-ui/react';

import { ThemeContext } from './components/contexts/ThemeContext/index.jsx';
import Header from './components/molecules/Header';
import PrincipalDescription from './components/molecules/PrincipalDescription/index.jsx';
import PrincipalImage from './components/atoms/PrincipalImage/index.jsx';

const App = () => {
  const { themeSelected } = useContext(ThemeContext);

  return (
    <Box
      maxWidth="100%"
      backgroundColor={themeSelected?.background}
      color={themeSelected?.color}
      className="transition-container"
    >
      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        <GridItem colSpan={4} h="100%" w="100%">
          <Header />
        </GridItem>
        <GridItem colSpan={2} h="100%" w="100%">
          <PrincipalDescription />
        </GridItem>
        <GridItem colSpan={2} h="100%" w="100%">
          <PrincipalImage />
        </GridItem>
        <GridItem backgroundColor="pink.600" colSpan={4} h="100%" w="100%">
          {' '}
          App Store
        </GridItem>
        <GridItem backgroundColor="pink.700" colSpan={4} h="100%" w="100%">
          {' '}
          Tools
        </GridItem>
        <GridItem backgroundColor="pink.800" colSpan={4} h="100%" w="100%">
          {' '}
          Footer{' '}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default App;

import React, { useContext } from 'react';

import { Container, Grid, GridItem } from '@chakra-ui/react';

import { ThemeContext } from './components/contexts/ThemeContext/index.jsx';
import Header from './components/molecules/Header';

const App = () => {
  const { themeSelected } = useContext(ThemeContext);

  console.log(themeSelected);

  return (
    <Container
      maxWidth="100vw"
      backgroundColor={themeSelected?.background}
      h="100vh"
      w="100vw"
      color={themeSelected?.color}
      className="transition-container"
    >
      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        <GridItem colSpan={4} h="100%" w="100%">
          <Header />
        </GridItem>
        <GridItem colSpan={2} h="100%" w="100%">
          {' '}
          Lat Izq
        </GridItem>
        <GridItem backgroundColor="pink.400" colSpan={2} h="100%" w="100%">
          {' '}
          Imagen
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
    </Container>
  );
};

export default App;

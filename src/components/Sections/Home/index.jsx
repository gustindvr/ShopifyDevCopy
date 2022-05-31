import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext/index.jsx';

import { Box, Grid, GridItem } from '@chakra-ui/react';
import Header from '../../organisms/Header/index.jsx';
import PrincipalDescription from '../../organisms/PrincipalDescription/index.jsx';
import PrincipalImage from '../../atoms/PrincipalImage/index.jsx';
import AppStore from '../../organisms/AppStore/index.jsx';

const Home = () => {
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
        <GridItem colSpan={4} h="100%" w="100%">
          <AppStore />
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

export default Home;

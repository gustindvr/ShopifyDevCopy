import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext/index.jsx';

import { Box, Grid, GridItem } from '@chakra-ui/react';
import Header from '../../organisms/Header';
import PrincipalDescription from '../../organisms/PrincipalDescription';
import PrincipalImage from '../../atoms/PrincipalImage';
import AppStore from '../../organisms/AppStore';
import ToolsCards from '../../molecules/ToolsCards';
import Footer from '../../organisms/Footer';

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
        <GridItem colSpan={4} h="100%" w="100%">
          <ToolsCards />
        </GridItem>
        <GridItem colSpan={4} h="100%" w="100%">
          <Footer />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Home;

import React from 'react';

import { Box, Grid, GridItem } from '@chakra-ui/react';

import BestNumbers from '../../atoms/AppStore/BestNumbers';
import DescriptionStore from '../../atoms/AppStore/DescriptionStore';

const AppStore = () => {
  return (
    <Box
      as="section"
      border="2px solid var(--color-lime-13)"
      borderRadius="1em"
      p="3em"
      m="2em"
    >
      <Grid templateColumns="repeat(4, 1fr)" justifyContent="space-between">
        <GridItem colSpan={2}>
          <DescriptionStore />
        </GridItem>
        <GridItem colSpan={2} justifySelf="right">
          <BestNumbers />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AppStore;

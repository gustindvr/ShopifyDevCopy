import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import FooterBottom from '../../molecules/FooterBottom';
import FooterTop from '../../molecules/FooterTop';

const Footer = () => {
  return (
    <Grid>
      <GridItem>
        <FooterTop />
      </GridItem>
      <GridItem>
        <FooterBottom />
      </GridItem>
    </Grid>
  );
};

export default Footer;

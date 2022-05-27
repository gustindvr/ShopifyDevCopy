import { Grid, GridItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginAndSearch from '../../atoms/Login&Search';
import Logo from '../../atoms/Logo';
import Navbar from '../../atoms/NavBar';

const Header = () => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  return (
    <Grid templateColumns="repeat(12, 1fr)" alignItems="center">
      <Router>
        <GridItem colSpan={1} alignItems="center">
          <Logo />
        </GridItem>
        <GridItem colSpan={1} hidden={searchBarOpen}>
          <Navbar searchBarOpen={searchBarOpen} />
        </GridItem>
        <GridItem colSpan={searchBarOpen ? 11 : 10} textAlign="end">
          <LoginAndSearch
            setSearchBarOpen={setSearchBarOpen}
            searchBarOpen={searchBarOpen}
          />
        </GridItem>
      </Router>
    </Grid>
  );
};

export default Header;

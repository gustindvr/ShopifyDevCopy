import React, { useContext } from 'react';

import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import { ThemeContext } from '../../contexts/ThemeContext';

const theme = {
  color: 'var(--text-principal-light)',
  background: 'var(--background-light)',
};
const LoginAndSearch = ({ searchBarOpen, setSearchBarOpen }) => {
  const { themeSelected, setThemeSelected } = useContext(ThemeContext);

  return (
    <Flex flexDir="row wrap" justify="end" alignItems="center" mr="3em" mt={2}>
      <InputGroup
        size="sm"
        w={searchBarOpen ? '100%' : '12em'}
        backgroundColor="var(--background-input-dark)"
        mr="1em"
      >
        <InputLeftElement
          pointerEvents="none"
          fontSize="0.9em"
          children={<SearchIcon />}
        />
        <Input
          placeholder="Search"
          onClick={() => setSearchBarOpen(true)}
          onBlur={() => setSearchBarOpen(false)}
          borderRadius="8px"
        />
        <InputRightElement
          children={
            <Box
              p="0 8px"
              mr="5px"
              bg="black"
              borderRadius="4px"
              border="1px solid var(--text-principal-light)"
              color="var(--text-principal-dark)"
            >
              /
            </Box>
          }
        />
      </InputGroup>

      {themeSelected?.background === 'var(--background-dark)' ? (
        <SunIcon onClick={() => setThemeSelected(theme)} color="yellow.600" />
      ) : (
        <MoonIcon
          onClick={() =>
            setThemeSelected({
              color: 'var(--text-principal-dark)',
              background: 'var(--background-dark)',
            })
          }
        />
      )}
    </Flex>
  );
};

export default LoginAndSearch;

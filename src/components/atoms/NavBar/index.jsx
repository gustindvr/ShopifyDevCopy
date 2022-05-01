import React from 'react';

import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  Link,
  MenuList,
  Flex,
} from '@chakra-ui/react';

import { TriangleDownIcon } from '@chakra-ui/icons';

const Navbar = ({ searchBarOpen }) => {
  const namesLinks = ['Apps', 'Themes', 'Custom storefronts', 'Marketplaces'];

  return (
    <Flex justifyContent="space-evenly" fontSize="sm" p="10px 0" mr={0}>
      {!searchBarOpen && (
        <>
          {namesLinks.map(item => (
            <Button key={item}>
              <Link to={`/${item}`} style={{ textDecoration: 'none' }}>
                {item}
              </Link>
            </Button>
          ))}

          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<TriangleDownIcon boxSize={3} />}
              backgroundColor="transparent"
              _hover={{ bg: '#20292B' }}
            >
              Apis and references
            </MenuButton>
            <MenuList>
              <MenuGroup title="Apps">
                <MenuItem>
                  <Link>GraphQL Admin API</Link>
                </MenuItem>
                <MenuItem>
                  <Link>REST Admin API</Link>
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="Themes">
                <MenuItem>
                  <Link>Liquid</Link>
                </MenuItem>
                <MenuItem>
                  <Link>Ajax API</Link>
                </MenuItem>
              </MenuGroup>
              <MenuGroup title="Custom storefronts">
                <MenuItem>
                  <Link>Storefront API</Link>
                </MenuItem>
                <MenuItem>
                  <Link>Hydrogen</Link>
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem>
                <Link>View all</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      )}
    </Flex>
  );
};

export default Navbar;

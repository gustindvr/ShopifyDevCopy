import React from 'react';
import { Box, Flex, Grid, GridItem, Heading, Link } from '@chakra-ui/react';

import { FaTwitch, FaYoutube, FaTwitter } from 'react-icons/fa';

import { linksFooter } from '../const';

const FooterTop = () => {
  return (
    <Box
      p="2em"
      borderRadius="1rem 1rem 0 0"
      m="2rem 2rem 0 2rem"
      background="var(--color-docs-background-surface-default)"
    >
      <Grid templateColumns="repeat(6, 1fr)">
        {linksFooter.map(elem => (
          <GridItem colSpan={1}>
            <Heading as="h4" fontSize="0.75em" m="2em 0">
              {elem.title}
            </Heading>

            <Flex flexFlow="row wrap">
              {elem.links.map(link => (
                <Link
                  href={link.url}
                  fontSize="sm"
                  w="70%"
                  key={link.url}
                  m="0.5em 0"
                >
                  <Box as="span" display="inline-block">
                    {elem.title.toLowerCase() === 'social' &&
                      ((link?.text.toLowerCase() === 'twitch' && (
                        <Box mr="1em">
                          <FaTwitch />
                        </Box>
                      )) ||
                        (link?.text.toLowerCase() === 'youtube' && (
                          <Box mr="1em">
                            <FaYoutube />
                          </Box>
                        )) ||
                        (link?.text.toLowerCase() === 'twitter' && (
                          <Box mr="1em">
                            <FaTwitter />
                          </Box>
                        )))}
                  </Box>
                  {link.text}
                </Link>
              ))}
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default FooterTop;

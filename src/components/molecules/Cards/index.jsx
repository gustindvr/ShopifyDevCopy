import React from 'react';

import { Box, Flex, Heading } from '@chakra-ui/react';

import { cardsContainer } from './const';
import LittleCards from '../../atoms/LittleCards';

const Cards = () => {
  return (
    <>
      <Heading as="h3" fontSize="xl" m="1em 0">
        Start building:
      </Heading>
      <Flex flexFlow="row wrap" m={0}>
        {cardsContainer.map((card, index) => (
          <Box mr="1em" mb="1em">
            <LittleCards url={card.image} text={card.title} key={index} />
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default Cards;

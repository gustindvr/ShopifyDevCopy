import { Button, Image, Text } from '@chakra-ui/react';
import React from 'react';

const LittleCards = ({ url, text }) => {
  return (
    <Button
      variant="cards"
      display="flex"
      justifyContent="start"
      minW="270px"
      p="2.3em 2.3em 2.3em 1em"
    >
      <Image src={url} w="50px" h="50px" />
      <Text ml="1em">{text}</Text>
    </Button>
  );
};

export default LittleCards;

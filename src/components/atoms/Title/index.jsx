import { Heading } from '@chakra-ui/react';
import React from 'react';

const Title = ({ title }) => {
  // cambiar color por variable css

  return (
    <Heading
      as="h3"
      w="100%"
      fontSize="xl"
      fontWeight="bold"
      color="whiteAlpha.900"
      m="1em 0"
    >
      {title}
    </Heading>
  );
};

export default Title;

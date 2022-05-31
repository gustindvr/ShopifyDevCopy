import React from 'react';

import { Flex, Heading, Image, Text } from '@chakra-ui/react';

import { toolsInfo } from '../const';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const ToolsCards = () => {
  return (
    <Flex as="section" flexFlow="row wrap" justifyContent="center">
      {toolsInfo?.map(elem => (
        <Flex
          border={
            elem?.text
              ? '0.5px solid var(--color-docs-border-default)'
              : '1px solid var(--color-azure-10)'
          }
          borderRadius="0.5rem"
          m="0.3em"
          p="1em"
          w="23%"
          flexFlow="row wrap"
          justifyItems="center"
          background={
            elem?.text
              ? 'var(--color-docs-background-surface-default)'
              : 'transparent'
          }
        >
          <Image src={elem?.url} w="max-content" h="max-content" />
          <Flex w="100%" m="0.5em 0">
            <Heading as="h4" fontSize={elem?.text ? 'lg' : '2xl'}>
              {elem.title}
            </Heading>
            {elem?.text && <ArrowForwardIcon ml={1} h={6} />}
          </Flex>
          {elem?.text && <Text fontSize="sm">{elem.text}</Text>}
        </Flex>
      ))}
    </Flex>
  );
};

export default ToolsCards;

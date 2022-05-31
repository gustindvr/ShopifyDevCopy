import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';

const BestNumbers = () => {
  return (
    <Box
      as="article"
      border="0.5px solid var(--color-docs-border-default)"
      borderRadius="0.5rem"
      background="var(--background-input-dark)"
      boxShadow=" 0 4px 0 var(--background-dark)"
      w="400px"
    >
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2, 1fr)"
        alignItems="center"
        justifyContent="center"
        margin="2em auto"
        w="70%"
      >
        <GridItem
          colSpan={1}
          rowSpan={2}
          w="max-content"
          mr="1em"
          justifySelf="right"
        >
          <Image
            src="https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/coin-dark-6461912dfd9f4943ca7d46e9e40b7d2531ec176b8cda54b9047e500c6c2df816.png"
            w="50px"
            h="50px"
          />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Text fontWeight="bold">$12.5B USD</Text>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} w="15em">
          <Text>Revenue generated from the Shopify ecosystem (2020)</Text>
        </GridItem>
      </Grid>
      <Flex alignItems="center" margin="1em auto" w="70%">
        <Image
          src="https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/hearts-dark-69127e38b4d28f2fc6b1da90842787114040fb9c58c4735be92bb586452eb794.png"
          w="50px"
          h="50px"
          mr="1em"
        />
        <Text fontWeight="bold">3 in 4 merchants use apps</Text>
      </Flex>
      <Flex alignItems="center" margin="2em auto" w="70%" flexFlow="row wrap">
        <Image
          src="https://cdn.shopify.com/shopifycloud/shopify_dev/assets/icons/48/app-dark-4307bac7ce985a6f9156541a096d5e6ebf9d6ba91dfaf881cfb71f95ee9de2b3.png"
          w="50px"
          h="50px"
          mr="1em"
        />

        <Text fontWeight="bold" w="70%">
          Average number of apps installed per merchant
        </Text>
        <Text w={40} fontSize="sm" fontWeight="bold" ml={10}>
          x6
        </Text>
      </Flex>
    </Box>
  );
};

export default BestNumbers;

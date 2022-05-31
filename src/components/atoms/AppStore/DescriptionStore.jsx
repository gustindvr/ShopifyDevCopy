import React from 'react';

import { Heading, Text } from '@chakra-ui/react';

import SolidLink from '../SolidLink';

const DescriptionStore = () => {
  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Launch your app or theme to millions of merchants
      </Heading>
      <Heading as="h3" fontSize="xl" m="1em 0">
        App Store
      </Heading>
      <Text fontSize="md">
        Get your app in front of the right merchants. With personalized
        recommendations and multiple billing options, the{' '}
        <SolidLink
          url="https://apps.shopify.com/?locale=es&shpxid=05bee93f-54CF-4EA0-6B9A-AC50CF4EB523"
          text="Shopify App Store"
        />{' '}
        is where merchants go to find the apps their business needs most.
      </Text>
      <Heading as="h3" fontSize="xl" m="1em 0">
        Theme Store
      </Heading>
      <Text fontSize="md">
        Sell your theme to merchants building their brands on the{' '}
        <SolidLink
          url="https://themes.shopify.com/?shpxid=05bee93f-54CF-4EA0-6B9A-AC50CF4EB523"
          text="Shopify Theme Store"
        />
        , which offers flexible pricing and targeted merchandising.
      </Text>
    </>
  );
};

export default DescriptionStore;

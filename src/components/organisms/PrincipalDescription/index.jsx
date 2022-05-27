import React from 'react';

import { Box, Container, Heading, Text } from '@chakra-ui/react';

import Title from '../../atoms/Title';
import SolidLink from '../../atoms/SolidLink';
import Cards from '../../molecules/Cards';

const PrincipalDescription = () => {
  return (
    <Container maxW="container.sm" pt="28">
      <Heading as="h1" size="2xl" pr="1em">
        Build anything. Reimagine commerce.
      </Heading>
      <Heading
        as="h2"
        size="md"
        mt={10}
        fontWeight="normal"
        pr="2em"
        lineHeight="7"
      >
        Millions of merchants trust Shopify to run their business—but they need
        developers to build the tools that help them achieve independence.
        Access powerful APIs to bring your ideas to life on the platform that
        makes commerce better for everyone.
      </Heading>

      {/* refactor  */}

      <Box mt="1em" mb="4em">
        <Title title="Develop apps that solve complex merchant problems" />
        <Text>
          Expansive{' '}
          <SolidLink
            url="https://shopify.dev/api/admin-graphql"
            text="GraphQL"
          />{' '}
          and{' '}
          <SolidLink
            url="https://shopify.dev/api/admin-rest"
            text="REST APIs"
          />{' '}
          let you integrate into Shopify's admin, online store, checkout, and
          more.
        </Text>

        <Title title="Integrate seamlessly into existing workflows" />
        <Text>
          Embed your app’s features with{' '}
          <SolidLink
            url="https://shopify.dev/apps/tools/app-bridge"
            text="App Bridge"
          />{' '}
          . Create high quality experiences with the ready-to-build{' '}
          <SolidLink
            url="https://polaris.shopify.com/?shpxid=f911b4d7-C1BF-44EE-9059-28AA23358D23"
            text="Polaris"
          />{' '}
          component library. let you integrate into Shopify's admin, online
          store, checkout, and more.
        </Text>

        <Title title="Help merchants express themselves" />
        <Text>
          Use <SolidLink url="https://shopify.dev/api/liquid" text="Liquid" />{' '}
          to build beautiful theme templates. Get started with{' '}
          <SolidLink url="https://shopify.dev/themes/tools/dawn" text="Dawn" />{' '}
          , our blazingly fast, accessible reference theme. component library.
        </Text>

        <Title title="Ship custom shopping experiences" />
        <Text>
          Add Shopify to any web, mobile, or gaming experience with the powerful{' '}
          <SolidLink
            url="https://shopify.dev/api/storefront"
            text="Storefront API"
          />{' '}
          and SDKs, plus any front-end stack you want. Use{' '}
          <SolidLink
            url="https://shopify.dev/marketplaces"
            text="Marketplace Kit"
          />{' '}
          to connect your platform and its users to millions of Shopify
          merchants and their products.
        </Text>

        {/* end refactor */}

        <Cards />
      </Box>
    </Container>
  );
};

export default PrincipalDescription;

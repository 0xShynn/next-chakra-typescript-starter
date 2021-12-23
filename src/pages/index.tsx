import { Box, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import Footer from "src/components/Footer";
import Header from "src/components/Header";

const Home: NextPage = () => {
  return (
    <Box>
      <NextSeo title="Home" description="A description for the index page" />

      <Box role="main" bg="gray.100">
        <Header />

        <Box p="5">
          <Text>Content</Text>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;

import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const Home: NextPage = () => {
  const color = useColorModeValue("gray.100", "gray.800");

  return (
    <Box>
      <NextSeo title="Home" description="A description for the index page" />

      <Box role="main" bg={color}>
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

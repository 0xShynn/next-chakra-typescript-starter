import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import ContainerMaxWidth from "@/components/shared/ContainerMaxWidth";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const Home: NextPage = () => {
  const color = useColorModeValue("gray.100", "gray.800");

  return (
    <Box>
      <NextSeo title="Home" description="A description for the index page" />

      <Box role="main" bg={color}>
        <Header />

        <ContainerMaxWidth>
          <Box p={4} bg="red.300">
            <Text>Container</Text>
            <Button variant="bubble">Hello le gang</Button>
          </Box>
        </ContainerMaxWidth>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;

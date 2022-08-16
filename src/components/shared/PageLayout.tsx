import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import Footer from "./Footer";
import Header from "./Header";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const PageLayout = ({ title, description, children }: Props) => {
  return (
    <Box>
      <NextSeo title={title} description={description} />

      <Box role="main">
        <Header />
        <Box maxW="container.xl" mx="auto" pos="relative" bg="red.300">
          {children}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default PageLayout;

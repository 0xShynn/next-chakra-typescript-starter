import { Box, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";

import PageLayout from "@/components/shared/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout title="Home" description="This is the home page.">
      <Heading>Home</Heading>
    </PageLayout>
  );
};

export default Home;

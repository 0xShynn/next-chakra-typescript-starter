import { Heading } from "@chakra-ui/react";

import PageLayout from "@/components/shared/PageLayout";

const Custom404 = () => {
  return (
    <PageLayout title="Error 404" description="This page was not found.">
      <Heading>404</Heading>
    </PageLayout>
  );
};

export default Custom404;

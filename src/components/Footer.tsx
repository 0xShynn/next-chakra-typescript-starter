import { ComponentType } from "react";

import { Box, Center, Link, Text } from "@chakra-ui/react";

const Footer: ComponentType = () => {
  return (
    <Box role="contentinfo" p="5">
      <Center>
        <Text fontSize={"sm"}>
          Next Chakra Starter TS made by{" "}
          <Link
            href="http://linktr.ee/anhek"
            target={"_blank"}
            rel="noreferrer"
          >
            Antonin Nhek
          </Link>
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;

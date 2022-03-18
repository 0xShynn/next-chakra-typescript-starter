import { ComponentType } from "react";

import { Box, Link, Stack, Text } from "@chakra-ui/react";

import Logo from "./Logo";
import SocialIconsStack from "./SocialIconsStack";

import { MIGHTY_MINT_CONST } from "src/utils/constants";

const Footer: ComponentType = () => {
  return (
    <Box role="contentinfo" bg="red.200" zIndex="base">
      <Stack w="full" direction="column" align="center">
        <Logo />

        <SocialIconsStack />

        <Text fontSize={"sm"}>
          Project developed by{" "}
          <Link
            href={MIGHTY_MINT_CONST.website_url}
            target={"_blank"}
            rel="noreferrer"
          >
            {MIGHTY_MINT_CONST.company_name}
          </Link>
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;

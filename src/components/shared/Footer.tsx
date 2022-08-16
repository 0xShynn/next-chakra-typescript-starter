import { ComponentType } from "react";

import { Box, Stack } from "@chakra-ui/react";

import Logo from "./Logo";
import SocialIconsStack from "./SocialIconsStack";

import { PROJECT_CONST } from "@/constants/projectConstants";

const Footer: ComponentType = () => {
  return (
    <Box role="contentinfo" bg="red.200" zIndex="base">
      <Stack w="full" direction="column" align="center">
        <Logo />

        <SocialIconsStack data={PROJECT_CONST.socialLinks} />
      </Stack>
    </Box>
  );
};

export default Footer;

import { HStack, Icon, Link } from "@chakra-ui/react";

import { globals } from "src/constants";

interface ISocialIcon {
  href: string;
  icon: any;
}

const SocialIcon = ({ href, icon }: ISocialIcon) => {
  return (
    <Link href={href} target="_blank" display={"inline-flex"}>
      <Icon as={icon} boxSize="36px" color="red" _hover={{ color: "blue" }} />
    </Link>
  );
};

const SocialIconsStack = () => {
  return (
    <HStack spacing="4">
      {globals.socialLinks.map((link, index) => (
        <SocialIcon key={index} {...link} />
      ))}
    </HStack>
  );
};

export default SocialIconsStack;

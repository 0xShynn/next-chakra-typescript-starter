import { Circle, HStack, Icon, Link } from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { IconType } from "react-icons/lib";

import { SocialLinkProps } from "@/types/SocialLinkProps";

type SocialIconsStackProps = {
  data: SocialLinkProps[];
};

let socialIcon: IconType;
const SocialIconsStack = ({ data }: SocialIconsStackProps) => {
  return (
    <HStack spacing="0">
      {data.map((item, index) => {
        switch (item.name) {
          case "twitter":
            socialIcon = IoLogoTwitter;
            break;

          case "github":
            socialIcon = IoLogoGithub;
            break;

          case "linkedin":
            socialIcon = IoLogoLinkedin;
            break;

          case "discord":
            socialIcon = FaDiscord;
            break;

          default:
            break;
        }

        return (
          <Link
            href={item.url}
            target="_blank"
            display={"inline-flex"}
            key={index}
          >
            <Circle size="full" p={{ base: 3, md: 2 }} color="white">
              <Icon
                as={socialIcon}
                boxSize="30px"
                color="red"
                _hover={{ color: "white" }}
              />
            </Circle>
          </Link>
        );
      })}
    </HStack>
  );
};

export default SocialIconsStack;

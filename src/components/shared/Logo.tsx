import { Link } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

import ProjectLogo from "@/assets/images/ProjectLogo.svg";

const Logo = () => {
  return (
    <NextLink passHref href="/">
      <Link display="inline-flex" bg="red.500" maxW="120px">
        <NextImage src={ProjectLogo} alt="Mighty Mint" />
      </Link>
    </NextLink>
  );
};

export default Logo;

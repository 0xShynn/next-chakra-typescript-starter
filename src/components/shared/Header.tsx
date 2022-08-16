import { ComponentType, useRef } from "react";

import {
  Box,
  HStack,
  Icon,
  IconButton,
  Link,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Stack,
  useDisclosure,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";

import Logo from "./Logo";
import SocialIconsStack from "./SocialIconsStack";

import { PROJECT_CONST } from "@/constants/projectConstants";

const Header: ComponentType = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  const displayNavLinks = () =>
    PROJECT_CONST.navLinks.map((link, index) => (
      <NextLink passHref href={link.href} key={index}>
        <Link bg="red.200" w="full" textAlign="left" p="3">
          {link.label}
        </Link>
      </NextLink>
    ));

  return (
    <Box w="full" bg="red.100">
      <Stack direction="row" justify="space-between" align="center" p="4">
        {/* Logo */}
        <Logo />

        {/* Menu (desktop) */}
        <HStack display={{ base: "none", md: "flex" }}>
          <SocialIconsStack data={PROJECT_CONST.socialLinks} />
          {displayNavLinks()}
        </HStack>

        {/* Menu icon button (mobile/tablet) */}
        <IconButton
          colorScheme="red"
          aria-label="Open Menu"
          display={{ base: "block", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          size="lg"
          icon={isOpen ? <Icon as={IoCloseSharp} /> : <Icon as={IoMenuSharp} />}
          zIndex="overlay"
        />
      </Stack>

      {/* Menu (mobile/tablet) */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bg="blue.100" display={"block"} p="4">
            <Flex justifyContent="end">
              <Button onClick={onClose} colorScheme="red" color="white">
                <Icon as={IoCloseSharp} display="inline-flex" />
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody px="4" py="4">
            <VStack spacing={2}>{displayNavLinks()}</VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;

import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <HStack display={"flex"} justifyContent="center" alignItems="center">
      <IconButton aria-label="gitHub" icon={<FaGithub size={15} />} />
      <IconButton aria-label="linkedIn" icon={<FaLinkedin size={15} />} />
      <Text>Made with Next.js, Redux Toolkit, Chakra UI, and typeScript</Text>
    </HStack>
  );
};

export default Footer;

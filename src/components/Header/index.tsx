import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useColorMode } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";
import { BsCartCheck } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "@/store/app";
import Link from "next/link";

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cart = useSelector((state: RootState) => state.items.totalQuantity);

  return (
    <Box>
      <Box m="1rem 3rem">
        <Stack
          direction={["row"]}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction={["row"]} spacing={10}>
            <Stack
              direction={["row"]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <IconButton
                size={"md"}
                display={{ md: " none" }}
                aria-label="open close button"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              />
              <HStack>
                <IconButton
                  aria-label="cart shopping"
                  icon={<FiShoppingCart size={24} />}
                />
                <Text color={"#6b9ab8"} fontSize={"xl"} fontWeight={"bolder"}>
                  Redux Shopping
                </Text>
              </HStack>
            </Stack>
            <ButtonGroup
              spacing={9}
              variant=""
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button fontSize="lg">Products</Button>
              <Button fontSize="lg">Cart</Button>
            </ButtonGroup>
          </Stack>
          <Stack
            direction={["row"]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Box
              border="2px solid #6b9ab8"
              borderRadius="lg"
              display="flex"
              alignItems="center"
              justifyContent="center"
              p={1}
            >
              <Button
                leftIcon={<BsCartCheck />}
                variant={"outLine"}
                color={"#6b9ab8"}
                fontSize={"lg"}
              >
                Items in cart{" "}
                <Box borderRadius="xl" p="0.5rem">
                  {cart}
                </Box>
              </Button>
            </Box>
            <IconButton
              aria-label={"dark-mood"}
              size={"lg"}
              icon={
                colorMode === "light" ? (
                  <IoMoon size={18} />
                ) : (
                  <IoSunny size={18} />
                )
              }
              onClick={toggleColorMode}
            />
            <IconButton
              aria-label={"GitHub"}
              as="a"
              href="https://github.com/abhijhacodes/next-redux-shopping-cart"
              icon={<FaGithub fontSize="1.8rem" />}
            />
          </Stack>
        </Stack>
      </Box>
      <HStack
        m={"2rem auto"}
        display={"flex"}
        justifyContent={"center"}
        alignContent="center"
      >
        <Text>Add Products to Cart for Shopping and See the cart items </Text>
        <Button>
          <Link href="/cart">Here</Link>
        </Button>
      </HStack>
    </Box>
  );
};

export default Header;

import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, RootDispatch } from "@/store/app";
import { itemsAction } from "@/store/items";
import {
  Box,
  Image,
  VStack,
  Text,
  Button,
  Flex,
  Stack,
  useBreakpointValue,
  HStack,
  ListItem,
  ButtonProps,
} from "@chakra-ui/react";

type Items = {
  id: number;
  title: string;
  price: number;
  rate: number;
  image: string;
};

const ProductItem: FC<Items> = ({ title, price, rate, image, id }) => {
  const dispatch: RootDispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(itemsAction.increment({ price, id, title, rate, image }));
  };
  return (
    <ListItem m="1rem">
      <Stack mb={"2rem"} spacing={useBreakpointValue({ base: "4", md: "5" })}>
        <VStack spacing={5}>
          <Image
            borderRadius="xl"
            src={image}
            alt="product item"
            objectFit="cover"
            boxSize={"13rem"}
          />
          <VStack>
            <Text>{title.substring(0, 20)}</Text>
            <Box>${price}</Box>
            <Box>{rate}</Box>
            <Button onClick={addToCartHandler}>Add to cart</Button>
          </VStack>
        </VStack>
      </Stack>
    </ListItem>
  );
};

export default ProductItem;

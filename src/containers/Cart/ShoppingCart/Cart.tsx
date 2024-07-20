import React, { FC } from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  VStack,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, RootDispatch } from "@/store/app";
import { itemsAction } from "@/store/items";

const Cart: FC = () => {
  const cartItems = useSelector((state: RootState) => state.items.item);
  const dispatch = useDispatch<RootDispatch>();

  const removeItemHandler = (id: number) => {
    dispatch(itemsAction.decrement({ id }));
  };

  const addItemHandler = (item: {
    id: number;
    price: number;
    title: string;
    rate: number;
    image: string;
    quantity: number;
  }) => {
    dispatch(itemsAction.increment(item));
  };

  return (
    <Box border="none">
      {cartItems.map((item) => (
        <HStack key={item.id} spacing={5}>
          <Image src={item.image} alt={item.title} boxSize="100px" />
          <VStack spacing={3}>
            <Text color={"white"}>{item.title}</Text>
            <Box>{item.rate}</Box>
            <Box>${item.price}</Box>
          </VStack>
          <ButtonGroup>
            <Button onClick={() => addItemHandler(item)}>+</Button>
            <Button onClick={() => removeItemHandler(item.id)}>-</Button>
          </ButtonGroup>
          <Box border="1px solid blue" p={"0.5rem"}>
            {item.quantity}
          </Box>
        </HStack>
      ))}
    </Box>
  );
};

export default Cart;

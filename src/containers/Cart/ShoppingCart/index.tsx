import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { RootState } from "@/store/app";

const ShoppingCart: FC = () => {
  const count = useSelector((state: RootState) => state.items.totalQuantity);
  return (
    <Box w={"40%"}>
      <Text fontWeight={"bolder"} fontSize={"xl"}>
        Shopping Cart (items: {count})
      </Text>
      <Box>
        <Cart />
      </Box>
    </Box>
  );
};

export default ShoppingCart;

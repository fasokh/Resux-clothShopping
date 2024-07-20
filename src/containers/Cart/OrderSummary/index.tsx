import { Box, Button, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FC } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/app";

const OrderSummary: FC = () => {
  const productPrice = useSelector(
    (state: RootState) => state.items.totalPrice
  );
  const item = useSelector((state: RootState) => state.items.item);
  const totalQuantity = useSelector(
    (state: RootState) => state.items.totalQuantity
  );

  const price = item.map((item) => item.price);

  return (
    <Box m={"2rem"}>
      <Box
        border={"1px solid #3f444e"}
        borderRadius={"xl"}
        width={{ base: "100%", md: "100%" }}
      >
        <Text
          color={"white"}
          fontWeight={"bolder"}
          fontSize={"xl"}
          m={"0.5rem"}
        >
          Order Summary
        </Text>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          m={"0.5rem"}
        >
          <Text color={"#9aa7b9"}>totalQuantity</Text>
          <Text>{totalQuantity}</Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          m={"0.5rem"}
        >
          <Text color={"#9aa7b9"}>Shipping + Tax</Text>
          <Link href="">Calculate shipping</Link>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          m={"0.5rem"}
        >
          <Text color={"#9aa7b9"}>Coupon Code</Text>
          <Link href="">Add coupon code</Link>
        </Box>
        <Box
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
          m={"0.5rem"}
        >
          <Text color={"white"} fontWeight={"bold"}>
            Total
          </Text>
          <Text>${productPrice}</Text>
        </Box>
        <Button
          m={"1rem"}
          rightIcon={<ArrowForwardIcon />}
          colorScheme="blue"
          borderRadius={"xl"}
          width={"90%"}
          aria-label="checkout"
          variant={"solid"}
          color={"white"}
          fontWeight={"bold"}
        >
          Checkout
        </Button>
      </Box>
      <Box mt={"1rem"}>
        <Text>
          or <Link href="/">Continue Shopping</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default OrderSummary;

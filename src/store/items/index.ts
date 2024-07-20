import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemValue = {
  id: number;
  price: number;
  title: string;
  rate: number;
  image: string;
  quantity: number;
};

type ItemValueState = {
  item: ItemValue[];
  totalQuantity: number;
  totalPrice: number;
};

const itemInitialState: ItemValueState = {
  item: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const itemsSlice = createSlice({
  name: "items",
  initialState: itemInitialState,
  reducers: {
    increment(state, action: PayloadAction<ItemValue>) {
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.item.push({
          ...newItem,
          quantity: 1,
        });
        state.totalPrice += newItem.price;
      } else {
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
      }
    },
    decrement(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const existingItem = state.item.find((item) => item.id === id);
      
      if (existingItem) {
        state.totalQuantity--;

        if (existingItem.quantity === 1) {
          state.item = state.item.filter((item) => item.id !== id);
          state.totalPrice -= existingItem.price;
        } else {
          existingItem.quantity -= 1;
          state.totalPrice -= existingItem.price;
        }
      }
    },
  },
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice;

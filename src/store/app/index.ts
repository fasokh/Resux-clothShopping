import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../product";
import itemsSlice from "../items";

const rootReducer = {
  product: productReducer.reducer,
  items: itemsSlice.reducer,
};

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;

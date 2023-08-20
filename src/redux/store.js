import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  allCart: cartSlice,
});

const persistReducers = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistReducers,
});

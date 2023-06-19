import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./features/storeSlices/homeSlice";

export const store = configureStore({
    reducer: {
        homeLoader: homeReducer,
    }
});
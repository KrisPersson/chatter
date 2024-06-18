import { configureStore } from "@reduxjs/toolkit";
import ReFetchReducer from "../features/reFetchControl/reFetch-slice";

export const store = configureStore({
  reducer: {
    refetchCtrl: ReFetchReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

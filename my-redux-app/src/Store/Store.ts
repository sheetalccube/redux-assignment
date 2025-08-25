import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../Feature/Counter/CounterSlice";
// import counterReducer from "./feature/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// ✅ Export AppDispatch type
export type AppDispatch = typeof store.dispatch;

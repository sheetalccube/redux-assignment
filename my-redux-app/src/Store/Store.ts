import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { CounterSlice } from "../Feature/Counter/CounterSlice";
import { AuthSlice } from "../Feature/Auth/AuthSlice";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  const result = next(action);
  console.log("Next State:", store.getState());
  return result;
};
// loggerMiddleware is a Redux middleware that logs the actions being dispatched and the current state after each action is processed.
// alternative for redux devtools

export const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    auth: AuthSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});
// devTools: false, // Enable Redux DevTools if available

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

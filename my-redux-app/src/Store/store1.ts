import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { CounterSlice } from "../Feature/Counter/CounterSlice";
import { AuthSlice } from "../Feature/Auth/AuthSlice";
import { usersSlice } from "../Feature/Users/UserSlice";
import { ApiSlice } from "../Feature/Api/ApiSlice";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  const result = next(action);
  console.log("Next State:", store.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    auth: AuthSlice.reducer,
    users: usersSlice.reducer,
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware, loggerMiddleware),
  // devTools: false, // uncomment if you want to disable Redux DevTools
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

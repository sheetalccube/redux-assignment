import { createSlice } from "@reduxjs/toolkit";
const initialState: { count: number } = { count: 6 };

export const counterSlice = createSlice({
  // The name of the slice is "counter"
  name: "counter",
  //   initialState is the initial state of the slice
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
  },
  //   reducer state change krta h
});

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;

// create slice 2 cheeze return krta h action and reducer

// feature of slice :
// 1. reducer function is pure function which does not mutate the state
// 2. it is easy to test,debug,maintain and is begineer friendly
// 3. it is easy to combine slices
// 4.action and reducer are combined in one object so manually action file likhne ki jarurat nhi h
//5. readable bi h
//6. autogenerates action no need to write them manually

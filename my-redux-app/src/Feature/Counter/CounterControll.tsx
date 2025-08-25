import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";
// ui pe sirf yhi dono use hote h
function CounterControll() {
  const dispatch = useDispatch();
  return (
    <>
      {/* <button onClick={() => dispatch({ type: "counter/increment" })}> */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      {/* both ways are correct and will work in the same way */}
      {/* <button onClick={() => dispatch({ type: "counter/decrement" })}> */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}> Reset</button>
    </>
  );
}

export default CounterControll;

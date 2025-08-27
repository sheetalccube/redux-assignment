import type { RootState } from "@/Store/store1";
import { useSelector } from "react-redux";
function CounterDisplay() {
  const count = useSelector((state: RootState) => state.counter.count);
  return (
    <>
      <p>Counter: {count}</p>
    </>
  );
}

export default CounterDisplay;

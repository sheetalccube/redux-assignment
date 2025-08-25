import type { RootState } from "../../Store/Store";
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

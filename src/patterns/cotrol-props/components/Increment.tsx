import { useCounterContext } from "../CounterContext";

const Increment = () => {
  const { handleIcrement } = useCounterContext();
  return <div onClick={handleIcrement}>+</div>;
};

export default Increment;

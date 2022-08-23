import { useCounterContext } from "../CounterContext";

const Decrement = () => {
  const { handleDecrement } = useCounterContext();
  return <div onClick={handleDecrement}>-</div>;
};

export default Decrement;

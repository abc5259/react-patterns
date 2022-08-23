import { useState } from "react";
import Counter from "./Couter";

const Usage = () => {
  const [count, setCount] = useState(0);

  const handleChangeCounter = (newCount: number) => {
    setCount(newCount);
  };
  return (
    <Counter value={count} onChange={handleChangeCounter}>
      <Counter.Decrement />
      <Counter.Count max={20} />
      <Counter.Increment />
    </Counter>
  );
};

export default Usage;

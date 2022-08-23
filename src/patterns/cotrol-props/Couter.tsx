import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Count from "./components/Count";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import { CounterProvider } from "./CounterContext";

interface Props {
  initialValue?: number;
  value?: number;
  onChange?: (count: number) => void;
}

const Counter = ({
  children,
  initialValue = 0,
  value,
  onChange,
}: PropsWithChildren<Props>) => {
  const [count, setCount] = useState(initialValue);
  const isControlled = value !== undefined && !!onChange;

  const getCount = () => (isControlled ? value : count);

  const firstMouded = useRef(false);
  useEffect(() => {
    if (!firstMouded.current && !isControlled) {
      onChange && onChange(count);
    }
    firstMouded.current = true;
  }, [count, onChange, isControlled]);

  const handleIcrement = () => {
    handleCountChange(getCount() + 1);
  };

  const handleDecrement = () => {
    handleCountChange(Math.max(0, getCount() - 1));
  };

  const handleCountChange = (newValue: number) => {
    isControlled ? onChange(newValue) : setCount(newValue);
  };

  return (
    <CounterProvider
      count={getCount()}
      handleIcrement={handleIcrement}
      handleDecrement={handleDecrement}
    >
      {children}
    </CounterProvider>
  );
};

Counter.Count = Count;
Counter.Increment = Increment;
Counter.Decrement = Decrement;

export default Counter;

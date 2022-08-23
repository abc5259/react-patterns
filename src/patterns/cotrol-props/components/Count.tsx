import { useCounterContext } from "../CounterContext";

interface Props {
  max: number;
}

const Count = ({ max }: Props) => {
  const { count } = useCounterContext();

  const hasError = max ? count >= max : false;
  return <div>{count}</div>;
};

export default Count;

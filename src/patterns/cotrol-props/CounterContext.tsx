import { createContext, PropsWithChildren, useContext } from "react";

interface CounterContextValue {
  count: number;
  handleIcrement: () => void;
  handleDecrement: () => void;
}

const CounterContext = createContext<CounterContextValue | null>(null);

interface Props extends CounterContextValue {}

export const CounterProvider = ({
  children,
  ...value
}: PropsWithChildren<Props>) => {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (context === null) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
};

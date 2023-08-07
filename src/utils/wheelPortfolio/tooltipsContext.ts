import { createContext } from "react";

const TooltipsContext = createContext<TooltipsContextType | undefined>(
  undefined
);

type TooltipsContextType = boolean;

export default TooltipsContext;

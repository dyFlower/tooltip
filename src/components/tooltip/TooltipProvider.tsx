import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface TooltipContextType {
  hover: boolean;
  setHover: Dispatch<SetStateAction<boolean>>;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  position: { top: number; left: number };
  setPosition: Dispatch<SetStateAction<{ top: number; left: number }>>;
  tooltipWidth: number;
  setTooltipWidth: Dispatch<SetStateAction<number>>;
  tooltipHeight: number;
  setTooltipHeight: Dispatch<SetStateAction<number>>;
}

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

export default function TooltipProvider({ children }: { children: ReactNode }) {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);
  const [tooltipWidth, setTooltipWidth] = useState<number>(0);
  const [tooltipHeight, setTooltipHeight] = useState<number>(0);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  return (
    <TooltipContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        hover,
        setHover,
        show,
        setShow,
        position,
        setPosition,
        tooltipWidth,
        tooltipHeight,
        setTooltipWidth,
        setTooltipHeight,
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
}
export function useTooltip() {
  return useContext(TooltipContext);
}

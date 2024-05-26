interface TooltipProps {
  children: ReactNode;
  width: string;
  height: string;
  bgColor?: string;
  fontColor?: string;
  hover?: boolean;
  delay?: number;
  delay_timing?: string;
  disable?: boolean;
}
interface TooltipBalloonProps {
  children: ReactNode;
  top?: number;
  left?: number;
  balloonBg?: string;
  balloonFontColor?: string;
  show?: boolean;
  direction?: string;
  setHover?: Dispatch<SetStateAction<boolean>>;
  tooltipHeight?: number;
  tooltipWidth?: number;
}
interface AlertProps {
  children: ReactNode;
  showAlert: boolean;
  setShowAlert?: Dispatch<SetStateAction<boolean>>;
}

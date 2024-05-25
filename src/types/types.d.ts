interface TooltipProps {
  children: ReactNode;
  width: string;
  height: string;
  bgColor?: string;
  fontColor?: string;
  hover?: boolean;
  direction?: string;
  delay?: number;
  delay_timing?: string;
  balloonBg?: string;
  balloonFontColor?: string;
  content?: string;
  disable?: boolean;
}
interface TooltipBalloonProps {
  children: ReactNode;
  top: number;
  left: number;
  balloonBg?: string;
  balloonFontColor?: string;
  fontColor?: string;
  show?: boolean;
  width: string;
  height: string;
  direction?: string;
  setHover?: Dispatch<SetStateAction<boolean>>;
  delay_timing?: string;
}
interface AlertProps {
  children: ReactNode;
  showAlert: boolean;
  setShowAlert?: Dispatch<SetStateAction<boolean>>;
}

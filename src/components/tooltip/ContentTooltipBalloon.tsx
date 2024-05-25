import { createPortal } from "react-dom";
import styled, { css } from "styled-components";

const StyledCustomTooltipBalloon = styled.div<TooltipBalloonProps>`
  position: fixed;
  display: ${(props) => (props.show ? "block" : "none")};
  width: auto;
  white-space: nowrap;
  padding: 14px 12px;
  text-align: center;
  top: ${(props) => props.top + parseFloat(props.height as string)}px;
  left: ${(props) => props.left}px;
  font-size: 18px;
  color: ${(props) => (props.balloonFontColor ? props.balloonFontColor : "white")};
  border-radius: 4px;
  background-color: ${(props) => (props.balloonBg ? props.balloonBg : "#1a2735")};
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.1215686275), 0 6px 16px rgba(0, 0, 0, 0.0784313725),
    0 9px 28px 6px rgba(0, 0, 0, 0.0509803922);

  z-index: 10;

  &:before {
    display: block;
    position: absolute;
    content: "";
    border-top: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid transparent;
  }

  ${(props) => {
    switch (props.direction) {
      case "TL":
        return css`
          transform: translate(0, calc(-100% - ${parseFloat(props.height as string)}px - 12px));
          &:before {
            bottom: -12px;
            left: 12px;
            border-top: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
      case "Top":
        return css`
          transform: translate(
            calc((${parseFloat(props.width as string)}px - 100%) / 2),
            calc(-100% - ${parseFloat(props.height as string)}px - 12px)
          );
          &:before {
            bottom: -12px;
            left: calc(50% - 6px);
            border-top: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
      case "TR":
        return css`
          transform: translate(
            calc(${parseFloat(props.width as string)}px - 100%),
            calc(-100% - ${parseFloat(props.height as string)}px - 12px)
          );
          &:before {
            bottom: -12px;
            right: 12px;
            border-top: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
      case "LT":
        return css`
          transform: translate(calc(-100% - 12px), -${parseFloat(props.height as string)}px);
          &:before {
            top: 6px;
            right: -11px;
            border-left: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
      case "Left":
        return css`
          transform: translate(calc(-100% - 12px), calc(-50% - ${parseFloat(props.height as string) / 2}px));
          &:before {
            top: calc(50% - 6px);
            right: -11px;
            border-left: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
      case "LB":
        return css`
          transform: translate(calc(-100% - 12px), -100%);
          &:before {
            bottom: 6px;
            right: -11px;
            border-left: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
      case "RT":
        return css`
          transform: translate(
            calc(${parseFloat(props.width as string)}px + 12px),
            -${parseFloat(props.height as string)}px
          );
          &:before {
            top: 6px;
            left: -11px;
            border-right: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
      case "Right":
        return css`
          transform: translate(
            calc(${parseFloat(props.width as string)}px + 12px),
            calc(-50% - ${parseFloat(props.height as string) / 2}px)
          );
          &:before {
            top: calc(50% - 6px);
            left: -11px;
            border-right: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
      case "RB":
        return css`
          transform: translate(calc(${parseFloat(props.width as string)}px + 12px), -100%);
          &:before {
            bottom: 6px;
            left: -11px;
            border-right: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
      case "BL":
        return css`
          transform: translate(0, 12px);
          &:before {
            top: -12px;
            left: 12px;
            border-bottom: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
      case "Bottom":
        return css`
          transform: translate(calc((${parseFloat(props.width as string)}px - 100%) / 2), 12px);
          &:before {
            top: -12px;
            left: calc(50% - 6px);
            border-bottom: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
      case "BR":
        return css`
          transform: translate(calc(${parseFloat(props.width as string)}px - 100%), 12px);
          &:before {
            top: -12px;
            right: 12px;
            border-bottom: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
      default:
        return css`
          transform: translate(
            calc((${parseFloat(props.width as string)}px - 100%) / 2),
            calc(-100% - ${parseFloat(props.height as string)}px - 12px)
          );
          &:before {
            bottom: -12px;
            left: calc(50% - 6px);
            border-top: 6px solid ${props.balloonBg ? props.balloonBg : "#1a2735"};
          }
        `;
    }
  }}
`;
export default function CustomTooltipBalloon({
  children,
  show,
  setHover,
  direction,
  width,
  height,
  balloonBg,
  balloonFontColor,
  top,
  left,
}: TooltipBalloonProps) {
  const rootElement = document.getElementById("root") as HTMLElement;
  return createPortal(
    <StyledCustomTooltipBalloon
      show={show}
      direction={direction}
      width={width}
      height={height}
      balloonBg={balloonBg}
      balloonFontColor={balloonFontColor}
      top={top}
      left={left}
      onMouseEnter={() => {
        setHover(true);
      }}
    >
      {children}
    </StyledCustomTooltipBalloon>,
    rootElement,
  );
}

import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import { useTooltip } from "./TooltipProvider";

const TooltipBox = styled.div<TooltipProps>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 2px 0;
  text-align: center;
  cursor: pointer;
  color: ${(props) =>
    props.hover ? (props.bgColor ? props.bgColor : "#1aab8a") : props.fontColor ? props.fontColor : "white"};
  border-radius: 4px;
  background-color: ${(props) => (props.hover ? "white" : props.bgColor || "#1aab8a")};
  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 2px;
    background-color: ${(props) => (props.hover ? (props.bgColor ? props.bgColor : "#1aab8a") : "white")};
    ${(props) =>
      props.hover
        ? css`
            transition: width 0.5s ease;
          `
        : css`
            transition: none;
          `}
    width: ${(props) => (props.hover ? "100%" : "0")};
  }

  &:before {
    top: 0;
    left: 0;
  }

  &:after {
    bottom: 0;
    right: 0;
  }
`;

export default function Tootip({
  children,
  bgColor,
  width,
  fontColor,
  height,
  delay_timing,
  delay,
  disable,
}: TooltipProps) {
  const tooltip = useTooltip() || {
    hover: false,
    setHover: () => {},
    show: false,
    setShow: () => {},
    position: { top: 0, left: 0 },
    setPosition: () => {},
    setTooltipWidth: () => {},
    setTooltipHeight: () => {},
  };

  const { hover, setHover, setShow, setPosition, setTooltipWidth, setTooltipHeight } = tooltip;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const { top, left } = ref.current.getBoundingClientRect();
      setPosition({ top, left });
      setTooltipHeight(parseFloat(height));
      setTooltipWidth(parseFloat(width));
    }
  }, [hover]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (hover && delay_timing === "enter") {
      timer = setTimeout(() => setShow(true), (delay as number) * 1000);
    } else if (hover) {
      setShow(true);
    } else if (!hover && delay_timing === "leave") {
      timer = setTimeout(() => setShow(false), (delay as number) * 1000);
    } else if (!hover && delay_timing === "hover") {
      timer = setTimeout(() => setShow(false), 300);
    } else if (!hover) {
      setShow(false);
    }
    return () => clearTimeout(timer);
  }, [hover]);

  return (
    <div>
      <TooltipBox
        ref={ref}
        onMouseEnter={() => {
          if (!disable) setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        width={width}
        height={height}
        bgColor={bgColor}
        hover={hover}
        fontColor={fontColor}
      >
        {children}
      </TooltipBox>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";
import TooltipBalloon from "./TooltipBalloon";
import ContentTooltipBalloon from "./ContentTooltipBalloon";
import TopAlert from "../alert/TopAlert";

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
  transition: background-color 0.5s ease, color 0.5s ease;

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
  direction,
  height,
  delay_timing,
  delay,
  balloonBg,
  balloonFontColor,
  content,
  disable,
}: TooltipProps) {
  const [hover, setHover] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const { top, left } = ref.current ? ref.current.getBoundingClientRect() : { top: 0, left: 0 };

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

  const rootElement = document.getElementById("root") as HTMLElement;

  return (
    <div ref={ref}>
      <TooltipBox
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
        {content ? (
          <ContentTooltipBalloon
            balloonBg={balloonBg}
            balloonFontColor={balloonFontColor}
            show={show}
            direction={direction}
            width={width}
            height={height}
            setHover={setHover}
            delay_timing={delay_timing}
            top={top}
            left={left}
          >
            <FontAwesomeIcon icon={faCircleExclamation} />
            <span> Are you sure delete this task?</span>
            <div style={{ textAlign: "right" }}>
              <button
                type="button"
                onClick={() => {
                  setShowAlert(true);
                }}
                style={{ backgroundColor: "#1aab8a", border: "none", borderRadius: "4px", cursor: "pointer" }}
              >
                Yes
              </button>
            </div>
          </ContentTooltipBalloon>
        ) : (
          <TooltipBalloon
            balloonBg={balloonBg}
            balloonFontColor={balloonFontColor}
            show={show}
            direction={direction}
            width={width}
            height={height}
            setHover={setHover}
            delay_timing={delay_timing}
            top={top}
            left={left}
          >
            <span>prompt text</span>
            <br />
            <span>prompt text</span>
            <br />
            <span>prompt text</span>
          </TooltipBalloon>
        )}
      </TooltipBox>
      {createPortal(
        <TopAlert setShowAlert={setShowAlert} showAlert={showAlert}>
          {children}
        </TopAlert>,
        rootElement,
      )}
    </div>
  );
}

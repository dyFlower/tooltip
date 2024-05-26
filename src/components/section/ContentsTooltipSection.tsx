import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { createPortal } from "react-dom";
import ContentTooltipBalloon from "../tooltip/ContentTooltipBalloon";
import Tooltip from "../tooltip/Tooltip";
import TooltipProvider from "../tooltip/TooltipProvider";
import TopAlert from "../alert/TopAlert";

export default function ContnetsTooltipSection() {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const rootElement = document.getElementById("root") as HTMLElement;
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "210px",
      }}
    >
      <TooltipProvider>
        <Tooltip width="70px" height="20px" direction="Top" delay_timing="hover">
          Top
          <ContentTooltipBalloon direction="Top" balloonBg="white" balloonFontColor="gray">
            <FontAwesomeIcon icon={faCircleExclamation} />
            <span>Are you sure delete this task?</span>
            <div style={{ textAlign: "right" }}>
              <button
                type="button"
                onClick={() => {
                  setSelected("top");
                  setShowAlert(true);
                }}
                style={{ backgroundColor: "#1aab8a", border: "none", borderRadius: "4px", cursor: "pointer" }}
              >
                Yes
              </button>
            </div>
          </ContentTooltipBalloon>
        </Tooltip>
      </TooltipProvider>
      <div style={{ display: "flex", gap: "70px" }}>
        <TooltipProvider>
          <Tooltip width="70px" height="20px" direction="Left" delay_timing="hover">
            Left
            <ContentTooltipBalloon direction="Left" balloonBg="white" balloonFontColor="gray">
              <FontAwesomeIcon icon={faCircleExclamation} />
              <span>Are you sure delete this task?</span>
              <div style={{ textAlign: "right" }}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected("left");
                    setShowAlert(true);
                  }}
                  style={{ backgroundColor: "#1aab8a", border: "none", borderRadius: "4px", cursor: "pointer" }}
                >
                  Yes
                </button>
              </div>
            </ContentTooltipBalloon>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip width="70px" height="20px" direction="Right" delay_timing="hover">
            Right
            <ContentTooltipBalloon direction="Right" balloonBg="white" balloonFontColor="gray">
              <FontAwesomeIcon icon={faCircleExclamation} />
              <span>Are you sure delete this task?</span>
              <div style={{ textAlign: "right" }}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected("right");
                    setShowAlert(true);
                  }}
                  style={{ backgroundColor: "#1aab8a", border: "none", borderRadius: "4px", cursor: "pointer" }}
                >
                  Yes
                </button>
              </div>
            </ContentTooltipBalloon>
          </Tooltip>
        </TooltipProvider>
      </div>
      <TooltipProvider>
        <Tooltip width="70px" height="20px" direction="Bottom" delay_timing="hover">
          Bottom
          <ContentTooltipBalloon direction="Bottom" balloonBg="white" balloonFontColor="gray">
            <FontAwesomeIcon icon={faCircleExclamation} />
            <span>Are you sure delete this task?</span>
            <div style={{ textAlign: "right" }}>
              <button
                type="button"
                onClick={() => {
                  setSelected("bottom");
                  setShowAlert(true);
                }}
                style={{ backgroundColor: "#1aab8a", border: "none", borderRadius: "4px", cursor: "pointer" }}
              >
                Yes
              </button>
            </div>
          </ContentTooltipBalloon>
        </Tooltip>
      </TooltipProvider>
      {createPortal(
        <TopAlert setShowAlert={setShowAlert} showAlert={showAlert}>
          {selected} tooltip confirm clicked on Yes.
        </TopAlert>,
        rootElement,
      )}
    </section>
  );
}

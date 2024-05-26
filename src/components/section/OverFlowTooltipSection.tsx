import Tooltip from "../tooltip/Tooltip";
import TooltipBalloon from "../tooltip/TooltipBalloon";
import TooltipProvider from "../tooltip/TooltipProvider";

export default function OverFlowTooltipSection() {
  return (
    <div
      style={{
        position: "relative",
        width: "250px",
        height: "100px",
        overflow: "scroll",
        zIndex: "0",
      }}
    >
      <section style={{ display: "flex", flexDirection: "column", width: "365px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          <TooltipProvider>
            <Tooltip width="70px" height="20px">
              TL
              <TooltipBalloon direction="TL">
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
              </TooltipBalloon>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip width="70px" height="20px">
              TOP
            </Tooltip>
            <TooltipBalloon direction="Top">
              <span>prompt text</span>
              <br />
              <span>prompt text</span>
              <br />
              <span>prompt text</span>
            </TooltipBalloon>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip width="70px" height="20px">
              TR
            </Tooltip>
            <TooltipBalloon direction="TR">
              <span>prompt text</span>
              <br />
              <span>prompt text</span>
              <br />
              <span>prompt text</span>
            </TooltipBalloon>
          </TooltipProvider>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
            <TooltipProvider>
              <Tooltip width="70px" height="20px">
                LT
              </Tooltip>
              <TooltipBalloon direction="LT">
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
              </TooltipBalloon>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip width="70px" height="20px">
                Left
              </Tooltip>
              <TooltipBalloon direction="Left">
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
              </TooltipBalloon>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip width="70px" height="20px">
                LB
              </Tooltip>
              <TooltipBalloon direction="LB">
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
              </TooltipBalloon>
            </TooltipProvider>
          </div>
          <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
            <TooltipProvider>
              <Tooltip width="70px" height="20px">
                RT
              </Tooltip>
              <TooltipBalloon direction="RT">
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
              </TooltipBalloon>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip width="70px" height="20px">
                Right
              </Tooltip>
              <TooltipBalloon direction="Right">
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
              </TooltipBalloon>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip width="70px" height="20px">
                RB
              </Tooltip>
              <TooltipBalloon direction="RB">
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
                <br />
                <span>prompt text</span>
              </TooltipBalloon>
            </TooltipProvider>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          <TooltipProvider>
            <Tooltip width="70px" height="20px">
              BL
            </Tooltip>
            <TooltipBalloon direction="BL">
              <span>prompt text</span>
              <br />
              <span>prompt text</span>
              <br />
              <span>prompt text</span>
            </TooltipBalloon>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip width="70px" height="20px">
              Bottom
            </Tooltip>
            <TooltipBalloon direction="Bottom">
              <span>prompt text</span>
              <br />
              <span>prompt text</span>
              <br />
              <span>prompt text</span>
            </TooltipBalloon>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip width="70px" height="20px">
              BR
            </Tooltip>
            <TooltipBalloon direction="BR">
              <span>prompt text</span>
              <br />
              <span>prompt text</span>
              <br />
              <span>prompt text</span>
            </TooltipBalloon>
          </TooltipProvider>
        </div>
      </section>
    </div>
  );
}

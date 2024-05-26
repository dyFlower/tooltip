import Tooltip from "../tooltip/Tooltip";
import TooltipBalloon from "../tooltip/TooltipBalloon";
import TooltipProvider from "../tooltip/TooltipProvider";

export default function DelayTooltipSection() {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <TooltipProvider>
        <Tooltip width="150px" height="20px" delay_timing="enter" delay={1}>
          enter-delay 1s
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
        <Tooltip width="150px" height="20px" delay_timing="leave" delay={1}>
          leave-delay 1s
          <TooltipBalloon direction="Top">
            <span>prompt text</span>
            <br />
            <span>prompt text</span>
            <br />
            <span>prompt text</span>
          </TooltipBalloon>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip width="150px" height="20px" delay_timing="hover">
          hover not hidden
          <TooltipBalloon direction="TR">
            <span>prompt text</span>
            <br />
            <span>prompt text</span>
            <br />
            <span>prompt text</span>
          </TooltipBalloon>
        </Tooltip>
      </TooltipProvider>
    </section>
  );
}

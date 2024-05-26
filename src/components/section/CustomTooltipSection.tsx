import Tooltip from "../tooltip/Tooltip";
import TooltipBalloon from "../tooltip/TooltipBalloon";
import TooltipProvider from "../tooltip/TooltipProvider";

export default function CustomTooltipSection() {
  return (
    <section style={{ display: "flex", gap: "10px" }}>
      <TooltipProvider>
        <Tooltip width="70px" height="20px" bgColor="pink">
          Pink
          <TooltipBalloon balloonBg="pink">
            <span>prompt text</span>
            <br />
            <span>prompt text</span>
            <br />
            <span>prompt text</span>
          </TooltipBalloon>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip width="70px" height="20px" bgColor="yellow" fontColor="black">
          Yellow
          <TooltipBalloon balloonBg="yellow" balloonFontColor="black">
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

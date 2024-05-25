import Tooltip from "../tooltip/Tooltip";

export default function DelayTooltipSection() {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Tooltip width="150px" height="20px" delay_timing="enter" delay={1} direction="TL">
        enter-delay 1s
      </Tooltip>
      <Tooltip width="150px" height="20px" delay_timing="leave" delay={1} direction="Top">
        leave-delay 1s
      </Tooltip>
      <Tooltip width="150px" height="20px" delay_timing="hover" direction="TR">
        hover not hidden
      </Tooltip>
    </section>
  );
}

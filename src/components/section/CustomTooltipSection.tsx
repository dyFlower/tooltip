import Tooltip from "../tooltip/Tooltip";

export default function CustomTooltipSection() {
  return (
    <section style={{ display: "flex", gap: "10px" }}>
      <Tooltip width="70px" height="20px" bgColor="pink" balloonBg="pink">
        Pink
      </Tooltip>
      <Tooltip
        width="70px"
        height="20px"
        bgColor="yellow"
        fontColor="black"
        balloonBg="yellow"
        balloonFontColor="black"
      >
        Yellow
      </Tooltip>
    </section>
  );
}

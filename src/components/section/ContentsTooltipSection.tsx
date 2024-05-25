import Tooltip from "../tooltip/Tooltip";

export default function ContnetsTooltipSection() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "210px",
      }}
    >
      <Tooltip
        width="70px"
        height="20px"
        direction="Top"
        content="content"
        balloonBg="white"
        balloonFontColor="gray"
        delay_timing="hover"
      >
        Top
      </Tooltip>
      <div style={{ display: "flex", gap: "70px" }}>
        <Tooltip
          width="70px"
          height="20px"
          direction="Left"
          content="content"
          balloonBg="white"
          balloonFontColor="gray"
          delay_timing="hover"
        >
          Left
        </Tooltip>
        <Tooltip
          width="70px"
          height="20px"
          direction="Right"
          content="content"
          balloonBg="white"
          balloonFontColor="gray"
          delay_timing="hover"
        >
          Right
        </Tooltip>
      </div>
      <Tooltip
        width="70px"
        height="20px"
        direction="Bottom"
        content="content"
        balloonBg="white"
        balloonFontColor="gray"
        delay_timing="hover"
      >
        Bottom
      </Tooltip>
    </section>
  );
}

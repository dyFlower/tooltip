import Tooltip from "../tooltip/Tooltip";

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
          <Tooltip width="70px" height="20px" direction="TL">
            TL
          </Tooltip>
          <Tooltip width="70px" height="20px" direction="Top">
            TOP
          </Tooltip>
          <Tooltip width="70px" height="20px" direction="TR">
            TR
          </Tooltip>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
            <Tooltip width="70px" height="20px" direction="LT">
              LT
            </Tooltip>
            <Tooltip width="70px" height="20px" direction="Left">
              Left
            </Tooltip>
            <Tooltip width="70px" height="20px" direction="LB">
              LB
            </Tooltip>
          </div>
          <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
            <Tooltip width="70px" height="20px" direction="RT">
              RT
            </Tooltip>
            <Tooltip width="70px" height="20px" direction="Right">
              Right
            </Tooltip>
            <Tooltip width="70px" height="20px" direction="RB">
              RB
            </Tooltip>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          <Tooltip width="70px" height="20px" direction="BL">
            BL
          </Tooltip>
          <Tooltip width="70px" height="20px" direction="Bottom">
            Bottom
          </Tooltip>
          <Tooltip width="70px" height="20px" direction="BR">
            BR
          </Tooltip>
        </div>
      </section>
    </div>
  );
}

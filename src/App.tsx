import BasicTooltipSection from "./components/section/BasicTooltipSection";
import ContnetsTooltipSection from "./components/section/ContentsTooltipSection";
import ControlTooltipSection from "./components/section/ControlTooltipSection";
import CustomTooltipSection from "./components/section/CustomTooltipSection";
import DelayTooltipSection from "./components/section/DelayTooltipSection";
import OverFlowTooltipSection from "./components/section/OverFlowTooltipSection";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <div style={{ display: "flex", gap: "40px" }}>
        <BasicTooltipSection />
        <OverFlowTooltipSection />
      </div>
      <DelayTooltipSection />
      <ContnetsTooltipSection />
      <CustomTooltipSection />
      <ControlTooltipSection />
    </div>
  );
}

export default App;

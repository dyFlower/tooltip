import styled from "styled-components";
import { useState } from "react";
import Tooltip from "../tooltip/Tooltip";

interface BtnProps {
  disable?: boolean;
}
const ControlBtn = styled.button<BtnProps>`
  width: 80px;
  border: none;
  color: white;
  background-color: ${(props) => (props.disable ? "#99a4b0;" : "#1a2735;")};
  cursor: pointer;
`;

export default function ControlTooltipSection() {
  const [disable, setDisable] = useState<boolean>(false);
  return (
    <section style={{ display: "flex", gap: "20px" }}>
      <ControlBtn
        type="button"
        disable={disable}
        onClick={() => {
          setDisable(!disable);
        }}
      >
        {disable === true ? "Enable" : "Disable"}
      </ControlBtn>
      <Tooltip bgColor="gray" disable={disable} width="300px" height="40px">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores atque
      </Tooltip>
    </section>
  );
}

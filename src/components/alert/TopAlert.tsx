import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";
import styled from "styled-components";

export default function TopAlert({ children, setShowAlert, showAlert }: AlertProps) {
  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => setShowAlert(false), 3000);
    return () => clearTimeout(timer);
  }, [showAlert]);

  const StyledStopAlertWrap = styled.div<AlertProps>`
    position: fixed;
    display: ${(props) => (props.showAlert ? "flex" : "none")};
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
  `;
  
  const StyledStopAlert = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 0 10px;
    border-radius: 5px;
    font-size: 12px;
    color: white;
    background-color: #407dee;
  `;
  return (
    <StyledStopAlertWrap
      showAlert={showAlert}
    >
      <StyledStopAlert>
        <div>
          <FontAwesomeIcon
            icon={faCheck}
            style={{
              width: "15px",
              height: "15px",
              padding: "5px 8px",
              backgroundColor: "#2f67d0",
              borderRadius: "5px 0 0 5px",
            }}
          />
        </div>
        <div style={{ padding: "0 10px" }}>{children} tooltip confirm clicked on Yes.</div>
        <FontAwesomeIcon
          icon={faX}
          style={{ paddingRight: "10px", cursor: "pointer" }}
          onClick={() => {
            setShowAlert(false);
          }}
        />
      </StyledStopAlert>
    </StyledStopAlertWrap>
  );
}

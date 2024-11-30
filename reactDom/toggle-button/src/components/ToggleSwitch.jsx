import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const checkIsOn = isOn ? "on" : "off";

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div
      className="toggle-switch"
      style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${checkIsOn}`}>
        <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
      </div>
    </div>
  );
};

import React from "react";

interface Props {
  onToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const ToggleSwitch: React.FC<Props> = ({ onToggle }) => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={onToggle} />
        <span className="slider round"></span>Dark Mode
      </label>
    </>
  );
};

export default ToggleSwitch;

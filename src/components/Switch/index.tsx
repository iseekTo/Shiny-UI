import React, { useState } from "react";

import { SwitchContainer, SwitchHandle } from "./styled";

export interface ISwitchProps {
  defaultChecked?: boolean;
}

const Switch: React.FC<ISwitchProps> = ({ defaultChecked = false }) => {
  const [isOn, setIsOn] = useState(defaultChecked);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <SwitchContainer isOn={isOn} onClick={toggleSwitch}>
      <SwitchHandle layout transition={spring} />
    </SwitchContainer>
  );
};

export default Switch;

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

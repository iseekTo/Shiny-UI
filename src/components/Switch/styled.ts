import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const SwitchContainer = styled.div<{ isOn: boolean }>`
  width: 60px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  padding: 0 5px;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;
  ${(props) =>
    props.isOn &&
    css`
      background-color: skyblue;
    `}
`;

export const SwitchHandle = styled(motion.div)`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 40px;
`;

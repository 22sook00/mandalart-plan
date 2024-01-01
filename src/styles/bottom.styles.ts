import styled from "@emotion/styled";
import { color } from "./globalStyle";
import { defaultLayout } from "./mandalart.styles";

export const BottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  gap: 20px;
  border-top: 1px solid ${color.border};
  z-index: 100;
  ${defaultLayout}
`;

export const BottomButton = styled.button<{ position?: string }>`
  border: none;
  border-radius: 6px;
  height: 34px;
  cursor: pointer;
  box-shadow: ${color.defaultShadow};
  background: #fff;
  font-weight: 600;
  border: 1px solid #d7dde7;
  color: #5e6a7e;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: ${({ position }) =>
    position === "left" ? "6px 16px 6px 10px" : "6px 10px 6px 16px"};

  &:active {
    transition: all 0.4s;
    transform: scale(0.97);
  }
  &:disabled {
    color: ${color.disabledText};
    cursor: not-allowed;
  }
`;

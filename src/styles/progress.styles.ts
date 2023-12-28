import styled from "@emotion/styled";
import { MandalartType } from "./mandalart.styles";

export const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 100px;
  background-color: #f9f9fb;
`;
export const ProgressBar = styled.div<MandalartType>`
  width: ${({ step }) => `${step ? step * 25 : 0}%`};
  height: 8px;
  border-radius: 100px;
  background: linear-gradient(to right, #17b9aa, #00a1ff, #06b6d4);
  transition: all 0.3s;
`;

export const ProgressText = styled.div<MandalartType>`
  width: 100%;
  color: #fe9748;
  margin-top: 8px;
  text-align: center;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: ${({ step }) => (step === 3 ? " flex-end" : " flex-start")};
`;

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color } from "./globalStyle";
import { GridBox } from "./grid.styles";

type MandalartType = {
  step?: number;
  primary?: boolean;
  isActive?: boolean;
};

const defaultLayout = css`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;

export const MandalartContainer = styled.div`
  ${defaultLayout}
  height: 100vh;
  padding: 20px 0;
  overflow: hidden;
  .sook_card {
    min-height: 70px !important;
    section {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 14px !important;
      color: ${color.lightGray};
      font-size: 12px;
    }
  }
`;
export const MandalartTitle = styled.h1`
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 20px;
`;

export const MandalartGridContainer = styled(GridBox)`
  cursor: pointer;
  border: 3px solid #f9f9fb !important;
  border-radius: 8px;
  padding: 4px;
`;

export const MandalartBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  border-top: 1px solid ${color.lightGray};
  background-color: #fff;
  padding: 20px 0;
  > div {
    ${defaultLayout}
  }
`;

export const MandalartProgress = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 100px;
  background-color: #f9f9fb;
`;
export const MandalartProgressBar = styled.div<MandalartType>`
  width: ${({ step }) => `${step ? step * 33.3 : 0}%`};
  height: 8px;
  border-radius: 100px;
  background-color: #fe9748;
  transition: all 0.3s;
`;

export const MandalartProgressText = styled.div<MandalartType>`
  width: 100%;
  color: #fe9748;
  margin-top: 8px;
  text-align: center;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: ${({ step }) => (step === 3 ? " flex-end" : " flex-start")};
`;
export const MandalartDIV = styled.div<MandalartType>`
  height: 250px;
  width: 250px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  padding: 24px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  .title {
    font-size: 16px;
    font-weight: 500;
  }
  background-color: ${({ primary }) => (primary ? "#f9f9fb" : "#fff")};
  transform: ${({ isActive }) =>
    isActive ? "scale(1.3) translateX(2.75rem)" : "scale(1) translateX(0)"};
  transition: transform 0.3s ease-in-out, margin-right 0.5s ease-in-out;
  z-index: ${({ isActive }) => (isActive ? "100" : "1")};
  position: ${({ isActive }) => (isActive ? "absolute" : "static")};
`;
export const MandalartINPUT = styled.input`
  border: none;
  border-bottom: 2px solid #0dc490;
  padding: 4px;
  font-size: 16px;
  z-index: 10;
  &:active,
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
  }
`;
export const MandalartBTN = styled.button`
  border: none;
  border-radius: 6px;
  width: 100%;
  height: 34px;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  background: red;
  font-weight: 600;
  color: #fff;
  background-color: #1dcd9b;

  &:active {
    transition: all 0.4s;
    transform: scale(0.97);
    background-color: #0abd8a;
  }
`;

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FlexCol } from "./flex.styles";
import { color } from "./globalStyle";
import { GridBox } from "./grid.styles";

export type MandalartType = {
  step?: number;
  primary?: boolean;
  isActive?: boolean;
};

export const defaultLayout = css`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MandalartContainer = styled.div`
  ${defaultLayout}
  height: 100vh;
  padding: 20px 20px 120px;
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
  font-weight: 800;
  font-size: 38px;
  color: ${color.textDark};
`;
export const MandalartSubTitle = styled.h3`
  font-weight: 800;
  font-size: 24px;

  color: ${color.lightGray};
`;

export const MandalartStep1Wrapper = styled.div<MandalartType>`
  display: flex;
  flex-direction: column;

  .title {
    font-size: 24px;
    font-weight: 700;
  }
`;

export const MandalartStep1FormWrapper = styled.div`
  margin-top: 70px;
  height: calc(100% - 200px);
  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .sook_button {
    width: 100%;
  }
`;
export const MandalartGridContainer = styled(GridBox)`
  cursor: pointer;
  border: 3px solid #f9f9fb !important;
  border-radius: 8px;
  padding: 4px;
`;

export const MandalartContentContainer = styled.div<MandalartType>`
  /*width: 250px;*/
  height: 200px;
  padding: 14px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 30px;

  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  .title {
    font-size: 16px;
    font-weight: 600;
    color: ${color.textDark};
  }

  background-color: ${({ primary }) => (primary ? "#f9f9fb" : "#fff")};
  transform: ${({ isActive }) =>
    isActive ? "scale(1.3) translateX(2.75rem)" : "scale(1) translateX(0)"};
  transition: transform 0.3s ease-in-out, margin-right 0.5s ease-in-out;
  z-index: ${({ isActive }) => (isActive ? "100" : "1")};
  position: ${({ isActive }) => (isActive ? "absolute" : "static")};
`;

export const MandalartStep3ListContainer = styled.div`
  /*height: 630px;*/
  border-radius: 8px;
  .title {
    margin-bottom: 30px;
  }
  .card {
    width: 100%;
    border-radius: 6px;
    height: 170px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${color.border};
    color: ${color.textLight};
    /*box-shadow: ${color.defaultShadow};*/
    &:hover {
      transition: all 0.3s;
      background-color: rgb(248 250 252);
      color: ${color.textDefault};
    }
  }
  .card-item {
    font-size: 24px;
    font-weight: 700;
  }
`;
export const MandalartStep3FormContainer = styled.div`
  margin-top: 87px;
`;
export const MandalartStep3List = styled.div`
  height: 538px;
  border-radius: 8px;
`;
export const MandalartStep3Form = styled.div`
  height: 538px;
  overflow: scroll;
  /*border: 1px solid ${color.border};*/
  background-color: ${color.hover};
  box-shadow: ${color.defaultShadow};
  padding: 20px;
  border-radius: 6px;
  > div {
    height: fit-content;
    margin-bottom: 16px;
  }
  .icon {
    font-size: 24px;
  }
  .subTitle {
    color: ${color.textDefault};
  }
  input {
    outline: none;
    border: none;
    padding: 6px 8px;
    font-size: 16px;
    height: 40px;
    width: 230px;
    background-color: ${color.hover};
    border-bottom: 2px solid ${color.lightestGray};
    &::placeholder {
      color: #bfc5cb;
      font-size: 14px;
    }
  }
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
export const MandalartBTN = styled.button<{ size?: string }>`
  border: none;
  border-radius: 6px;
  width: ${({ size }) => (size === "full" ? "100%" : "100px")};
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

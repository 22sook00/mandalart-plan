import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { SookFlex } from "react-sook-style";
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
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MandalartContainer = styled.div`
  ${defaultLayout}
  position: relative;
  height: 100vh;
  padding: 40px 20px 120px;
  overflow: scroll;
`;

export const GradationTitle = styled.h1`
  font-weight: 800;
  font-size: 52px;
  background: linear-gradient(90deg, #17b9aa, #00a1ff, #06b6d4);
  -webkit-background-clip: text;
  color: transparent;
  line-height: 48px;
`;

export const MandalartTitle = styled.h1`
  font-weight: 800;
  font-size: 38px;
  color: ${color.textDark};
`;
export const MandalartSubTitle = styled.h3`
  font-weight: 800;
  line-height: 24px;
  font-size: 24px;
  color: ${color.lightGray};
`;

export const MandalartImg = styled.img<{ type?: string }>`
  padding-bottom: 10px;
  max-width: ${({ type }) => (type === "init" ? "100%" : "300px")};
`;
export const MandalartList = styled.ul`
  background-color: ${color.backgroundGray};
  border-radius: 8px;
  padding: 16px;
  li {
    color: ${color.textLight};
    font-size: 12px;
    word-break: keep-all;
    white-space: pre-line;
    list-style: none;
  }
  p {
    margin: 8px 0 4px;
    font-weight: 700;
    color: ${color.textDefault};
  }
`;
export const MandalartTagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0;
`;
export const MandalartTag = styled.div`
  padding: 4px 8px;
  color: #fff;
  font-weight: 800;
  font-size: 12px;
  background-color: #06b6d4;
  border-radius: 4px;
  box-shadow: ${color.defaultShadow};
`;
export const MandalartDesc = styled.div`
  color: ${color.lightGray};
  font-size: 12px;
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

export const MandalartStep2Wrapper = styled.div<MandalartType>`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  .title {
    font-size: 24px;
    font-weight: 700;
  }
`;

export const MandalartContentContainer = styled.div<MandalartType>`
  /*width: 250px;*/
  height: 150px;
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
`;
export const MandalartStep3FormContainer = styled.div``;
export const MandalartStep3List = styled.div`
  height: 538px;
  border-radius: 8px;
`;
export const MandalartStep3Form = styled.div`
  border-radius: 6px;
  > div {
    height: fit-content;
    margin-bottom: 26px;
  }
  .icon {
    width: 43px;
    height: 43px;
    text-align: center;
    font-size: 28px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid ${color.lightestGray};
  }
  .subTitle {
    font-size: 32px;
    color: ${color.textDefault};
  }
  .sook_card {
    section {
      height: 150px;
      display: flex;
      align-items: center;
    }
    min-height: 150px;
  }
  input {
    outline: none;
    border: none;
    padding: 6px 8px;
    font-size: 16px;
    height: 43px;
    border-radius: 8px;
    &::placeholder {
      color: #bfc5cb;
      font-size: 14px;
    }
  }
  p {
    width: 350px;
  }
`;

export const MandalartStep3Card = styled.div<{ disabled?: boolean }>`
  width: 100%;
  border-radius: 6px;
  height: 150px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  background-color: ${({ disabled }) =>
    disabled ? "rgb(248 250 252)" : "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${color.border};
  color: ${({ disabled }) => (disabled ? color.lightGray : color.textLight)};
  /*box-shadow: ${color.defaultShadow};*/
  &:hover {
    transition: all 0.3s;
    background-color: ${({ disabled }) => !disabled && "rgb(248 250 252)"};
    color: ${({ disabled }) => !disabled && color.textDefault};
  }

  .card-item {
    width: 200px;
    white-space: pre-line;
    text-align: center;
    p {
      font-weight: 700;
      font-size: 16px;
      margin-bottom: 4px;
    }
  }
`;

export const MandalartCompleteContainer = styled.div`
  ${defaultLayout}
  overflow: scroll;
  height: 100%;
  .button-wrapper {
    width: 774px;
    display: flex;
    justify-content: flex-end;
    button {
      background: #fff;
      font-weight: 600;
      border: 1px solid #d7dde7;
      color: #5e6a7e;
      padding: 8px 20px;
      &:hover {
        transition: all 0.3s;
        background-color: ${color.hover};
        font-weight: 700;
      }
    }
  }
  .sook_card {
    width: 70px !important;
    height: 70px !important;
    min-height: 70px !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    > section {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 4px !important;

      white-space: normal !important;

      p {
        font-size: 10px;
        text-align: center;
        line-height: 14px;
        width: 100%;
        word-break: keep-all;
        white-space: pre-line;
      }
    }
  }
`;
export const MandalartGridContainer = styled(GridBox)<{ type?: string }>`
  border: 3px solid #f9f9fb !important;
  border-radius: 8px;
  padding: 20px 40px;
  margin-top: 20px;
  margin-bottom: 160px;
  background-color: #f9f9fb;
  .sook_card {
    width: ${({ type }) => (type === "my" ? "90px" : "70px")} !important;
    height: ${({ type }) => (type === "my" ? "90px" : "70px")} !important;
    min-height: ${({ type }) => (type === "my" ? "90px" : "70px")} !important;
    p {
      line-height: 18px !important;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: ${({ type }) => (type === "my" ? 700 : 500)} !important;
      font-size: ${({ type }) => (type === "my" ? "14px" : "10px")} !important;
    }
  }
`;

export const MandalartNotFoundContainer = styled.div`
  .buttonContainer {
    margin-bottom: 30px;
  }
`;

//완성만다라트

export const MandalartCompleteCardWrapper = styled.div`
  position: relative;
`;
export const MandalartCompleteArrowWrapper = styled.div`
  position: absolute;
  top: -150px;
  left: 0;
  svg {
    width: 200px;
    height: 100px;
  }
`;

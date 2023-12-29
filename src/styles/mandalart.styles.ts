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
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MandalartContainer = styled.div`
  ${defaultLayout}
  position: relative;
  height: 100vh;
  padding: 20px 20px 120px;
  overflow: hidden;
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
  input {
    outline: none;
    border: none;
    padding: 6px 8px;
    font-size: 16px;
    height: 43px;
    width: 350px;
    border-radius: 8px;
    /*box-shadow: ${color.defaultShadow};*/
    background-color: ${color.hover};
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
  height: 170px;
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
    font-size: 24px;
    font-weight: 700;
  }
`;

export const MandalartCompleteContainer = styled.div`
  ${defaultLayout}
  overflow: scroll;
  height: 100%;
  .sook_card {
    height: 70px !important;
    min-height: 70px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    > section {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0 4px !important;
      font-size: 10px;
      text-align: center;
      line-height: 14px;
      white-space: normal !important;

      width: 70px;
      height: 70px !important;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
export const MandalartGridContainer = styled(GridBox)`
  border: 3px solid #f9f9fb !important;
  border-radius: 8px;
  padding: 20px 40px;
  margin-top: 20px;
  margin-bottom: 160px;
  background-color: #f9f9fb;
`;

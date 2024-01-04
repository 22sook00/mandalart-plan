import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { keyframes } from "@emotion/react";
import { color } from "./globalStyle";
import { GridBox } from "./grid.styles";

export type MandalartType = {
  step?: number;
  primary?: boolean;
  isActive?: boolean;
};

export const defaultLayout = css`
  max-width: 1002px;
  overflow-x: hidden;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  padding: 100px 0;
`;

export const MandalartContainer = styled.div`
  ${defaultLayout}
  padding:100px 4px
`;

export const MandalartCaptureSection = styled.section`
  margin: 16px;
`;

export const MandalartSubTitle = styled.h3`
  font-weight: 800;
  line-height: 24px;
  font-size: 20px;
  color: ${color.lightGray};
`;
export const MandalartDesc = styled.p`
  font-size: 14px;
  color: ${color.textDefault};
`;
export const GradationTitle = styled.h1`
  font-weight: 900;
  font-size: 48px;
  line-height: 57px;
  background: linear-gradient(30deg, #17b9aa, #00a1ff, #06b6d4);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: -1px;
  text-transform: capitalize;
`;
export const SvgWrapper = styled.div`
  width: fit-content;
  position: relative;

  svg {
    width: 16px;
    height: 16px;
    cursor: pointer;
    &:hover {
      transition: all 0.2s;
      color: ${color.textLight};
    }
  }
`;

export const MandalartFormSubmitSection = styled.section`
  margin-top: 50px;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;

export const MandalartButtons = styled.button<{ type?: string }>`
  background-color: ${({ type }) =>
    type === "submit" ? color.backgroundGray : color.main};
  color: ${({ type }) => (type === "submit" ? color.textLight : "#fff")};

  font-size: 14px;
  font-weight: 500;
  min-width: ${({ type }) => (type === "reset" ? "36px" : "78px")};
  padding: 8px 0;
  border-radius: 8px;
  line-height: 19px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const MandalartFormItem = styled.div`
  /*width: 300px;*/
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3px;
  border-radius: 8px;
`;

export const MandalartFormSubItem = styled.div<{
  isMain?: boolean;
  readOnly?: boolean;
}>`
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  background-color: ${({ isMain, readOnly }) =>
    isMain ? " #00a1ff" : readOnly ? color.backgroundGray : "#fff"};
  border: ${({ isMain }) =>
    isMain ? "1px solid #00a1ff" : `1px solid ${color.border}`} !important;
`;

export const MandalartContent = styled.textarea<{
  readOnly?: boolean;
  isMain?: boolean;
  errors?: any;
}>`
  resize: none;
  height: 90px;
  width: 100px;

  /*word-break: keep-all;*/
  text-align: center; /* 텍스트를 가운데 정렬 */

  line-height: 1.5;
  border: none;

  font-size: 14px;
  white-space: pre-line;
  overflow: hidden;

  cursor: ${({ readOnly }) => readOnly && "default"};
  color: ${({ isMain, readOnly }) =>
    readOnly ? color.placeholderText : isMain ? "#fff" : color.textDefault};

  background-color: ${({ isMain, readOnly }) =>
    isMain ? " #00a1ff" : readOnly ? color.backgroundGray : "#fff"};
  font-weight: 700;
  &:focus,
  &:active,
  &:hover {
    outline: none;
    transition: all 0.3s;
  }
  &::placeholder {
    color: ${({ isMain }) => (isMain ? " #fff" : color.disabledText)};
  }
`;

export const MandalartContentful = styled.div<{
  readOnly?: boolean;
  isMain?: boolean;
  errors?: any;
}>`
  resize: none;
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  /*word-break: keep-all;*/
  text-align: center; /* 텍스트를 가운데 정렬 */

  line-height: 1.5;
  border: none;

  font-size: 14px;
  white-space: pre-line;
  overflow: hidden;

  cursor: ${({ readOnly }) => readOnly && "default"};
  color: ${({ isMain, readOnly }) =>
    readOnly ? color.placeholderText : isMain ? "#fff" : color.textDefault};

  background-color: ${({ isMain, readOnly }) =>
    isMain ? " #00a1ff" : readOnly ? color.backgroundGray : "#fff"};
  font-weight: 700;
  &:focus,
  &:active,
  &:hover {
    outline: none;
    transition: all 0.3s;
  }
  &::placeholder {
    color: ${({ isMain }) => (isMain ? " #fff" : color.disabledText)};
  }
`;

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
  overflow: hidden;
  width: 100vw;

  margin: 0 auto;
  padding: 100px 0;
  @media (max-width: 414px) {
    height: 100vh;
  }
`;

export const MandalartContainer = styled.div`
  ${defaultLayout}
  padding:60px 16px;
  position: relative;
  @media (max-width: 414px) {
    padding: 40px 12px;
  }
`;

export const MandalartDialogTitle = styled.h1`
  font-weight: 600;
  line-height: 26px;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  white-space: pre-line;

  color: ${color.textDefault};
`;
export const IntroSection = styled.section`
  padding: 0 16px;
`;
export const MandalartSubTitle = styled.h3`
  font-weight: 700;
  line-height: 24px;
  font-size: 18px;
  color: ${color.lightGray};
  @media (max-width: 414px) {
    font-size: 16px;
  }
`;
export const MandalartDesc = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${color.textDefault};
`;
export const ImageSection = styled.section`
  padding: 16px;
  @media (max-width: 414px) {
    padding: 0 4px;
  }
`;
export const MandalartTitle = styled.h1`
  font-weight: 700;
  font-size: 38px;
  color: ${color.textDefault};
  margin-bottom: 24px;
  @media (max-width: 414px) {
    font-size: 28px;
  }
`;
export const GradationTitle = styled.h1`
  font-weight: 700;
  font-size: 52px;

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
    cursor: pointer;
    &:hover {
      transition: all 0.2s;
      color: ${color.textLight};
    }
  }
`;

export const MandalartFormSubmitSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  @media (max-width: 414px) {
    padding: 0 4px;
  }
`;

export const MandalartButtons = styled.button<{
  type?: string;
  w?: string;
  theme?: string;
}>`
  background-color: ${({ theme }) =>
    theme === "light" ? color.backgroundGray : color.main};
  color: ${({ theme }) => (theme === "light" ? color.textLight : "#fff")};
  width: ${({ w }) => w ?? "auto"};
  font-size: 16px;
  font-weight: 600;
  padding: 12px;
  border-radius: 8px;
  line-height: 19px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const MandalartFormItem = styled.div`
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3px;
  border-radius: 8px;
  border: 3px solid;
`;

export const MandalartContent = styled.textarea<{
  readOnly?: boolean;
  isMain?: boolean;
  errors?: any;
}>`
  resize: none;
  height: 100px;
  width: 100%;
  padding: 12px;
  word-break: keep-all;
  text-align: center;
  line-height: 1.5;
  border-radius: 4px;
  display: flex;
  align-items: center;

  justify-content: center;
  font-size: 14px;
  white-space: pre-line;

  border: ${({ isMain }) =>
    isMain ? "1px solid #00a1ff" : `1px solid ${color.border}`} !important;

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
  @media screen and (max-width: 820px) {
    height: 80px;
  }
  @media screen and (max-width: 414px) {
    height: 43px;
    border-radius: 8px;
    color: ${color.textDefault};
    text-align: left;
    padding: 8px;
    align-items: center;
    font-size: 16px;
  }
`;
export const MobileMandalartContent = styled.div<{
  readOnly?: boolean;
  isMain?: boolean;
  errors?: any;
}>`
  text-align: center;
  border-radius: 4px;
  height: 36px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  border: ${({ isMain }) =>
    isMain ? "1px solid #00a1ff" : `1px solid ${color.border}`} !important;

  cursor: ${({ readOnly }) => readOnly && "default"};
  color: ${({ isMain, readOnly }) =>
    readOnly ? color.disabledText : isMain ? "#fff" : color.textDefault};

  background-color: ${({ isMain, readOnly }) =>
    isMain ? " #00a1ff" : readOnly ? color.backgroundGray : "#fff"};

  font-weight: 700;
  padding: 0;
  p {
    max-width: 25px;
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-clamp: 2;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: 414px) {
    display: block;
  }
`;
export const DesktopWrapper = styled.div`
  @media (max-width: 414px) {
    display: none;
  }
`;

export const MandalartFooter = styled.footer`
  margin: 24px 16px;
  display: flex;
  justify-content: flex-end;

  a {
    color: ${color.textLight};
    text-align: right;
    p {
      font-size: 16px;
    }
  }
  @media (max-width: 414px) {
    margin: 32px 12px 24px;
  }
`;

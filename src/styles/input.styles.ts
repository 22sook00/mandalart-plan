import styled from "@emotion/styled";
import { color } from "./globalStyle";
import { css } from "@emotion/react";
import * as FlexSC from "./flex.styles";

type InputType = {
  errors?: boolean;
  customHeight?: string;
};

type LabelType = {
  isLabel?: boolean;
};

const commonInput = css`
  width: 100%;
  &:focus,
  &:active {
    outline: none;
  }

  @media (max-width: 768px) {
    height: 34px;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;
export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 62px;
`;
export const InputLabelContainer = styled(FlexSC.FlexBox)`
  display: -webkit-box;
  justify-content: flex-start;
  gap: 4px;
  margin-bottom: 4px;
  height: 22px;
  line-height: 22px;
  > p {
    margin-top: 0;
    line-height: 14px;
  }
  .empty-label {
    height: 14px;
  }
`;

export const InputForm = styled.input<InputType>`
  ${commonInput}
  height: ${({ customHeight }) => customHeight ?? "42px"};

  /*background-color: ${({ readOnly }) =>
    readOnly ? color.lightestGray : "#fff"};*/
  cursor: ${({ readOnly }) => readOnly && "auto"};
  color: ${({ readOnly }) => (readOnly ? color.textLight : color.textDefault)};

  border: none;
  border-bottom: ${({ errors }) =>
    errors
      ? `2px solid ${color.errorText} `
      : `2px solid ${color.successText}`} !important;
  border-radius: 0px !important;
  border-bottom: ${({ readOnly }) =>
    readOnly && `2px solid  #e0e4eb`} !important;

  padding: 4px;
  font-size: 16px;

  &:focus,
  &:active {
    outline: none;
    transition: all 0.3s;
    border-bottom: ${({ readOnly }) =>
      readOnly && `2px solid  #e0e4eb`} !important;
  }
  &::placeholder {
    color: ${color.placeholderText};
    font-size: 14px;
  }
`;
export const TextareaForm = styled.textarea<InputType>`
  ${commonInput}
  position: relative;
  resize: none;
  min-height: 86px;
  max-height: 140px;
  padding: 10px;
  white-space: pre-line;
  background-color: ${({ readOnly }) =>
    readOnly ? color.lightestGray : "#fff"};

  cursor: ${({ readOnly }) => readOnly && "auto"};
  color: ${({ readOnly }) => (readOnly ? color.textLight : color.textDefault)};
  border: ${({ errors }) =>
    errors ? `1px solid ${color.errorText} ` : `1px solid #e0e4eb`} !important;
  border-radius: 0px;
  &:focus,
  &:active,
  &:hover {
    outline: none;
    transition: all 0.3s;

    border: ${({ readOnly }) => readOnly && `1px solid  #e0e4eb`} !important;
  }
  &::placeholder {
    color: ${color.placeholderText};
    font-size: 12px;
  }
`;
export const PwEyeIconWrapper = styled.div<LabelType>`
  position: absolute;
  top: ${({ isLabel }) => (isLabel ? "35px" : "10px")};
  right: 16px;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
  }
`;
export const InputLabel = styled.p`
  width: fit-content;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: ${color.textDark};

  > span {
    color: ${color.successText};
  }
`;

export const InputLabelRequired = styled.span`
  color: ${color.textDark};
  line-height: 14px;
`;

export const InputDescription = styled.p`
  font-size: 12px;
  margin-bottom: 6px;
  color: #414b83;
`;
export const TextareaFormLength = styled.span`
  position: absolute;
  bottom: -22px;
  right: 0px;
  color: ${color.textLight};
  font-size: 14px;
  span {
    color: ${color.textLight};
  }
`;
export const InputErrorText = styled.p`
  font-size: 10px;
  text-align: right;
  color: ${color.errorText};
  margin-top: 4px;
`;

import styled from "@emotion/styled";
import { FlexBox } from "./flex.styles";
import { color } from "./globalStyle";

export const LinkContainer = styled(FlexBox)`
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  white-space: pre;
  cursor: pointer;
  height: 100%;
  width: 200px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  a {
    color: ${color.textDefault} !important;
  }
  &:hover {
    transition: all 0.3s;
    background-color: #f9f9fb;
  }
`;

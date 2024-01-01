import styled from "@emotion/styled";
import { FlexBox } from "./flex.styles";
import { color } from "./globalStyle";

export const LinkContainer = styled(FlexBox)`
  align-items: center;
  justify-content: center;

  font-weight: 700;
  white-space: pre;
  cursor: pointer;
  height: 40px;
  width: 430px;
  color: #fff;
  border-radius: 4px;

  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  a {
    width: 100%;
    text-align: center;
    color: ${color.textLight} !important;
  }
  &:hover {
    transition: all 0.3s;

    background: linear-gradient(90deg, #17b9aa, #00a1ff, #06b6d4);
    a {
      color: #fff !important;
    }
  }
`;

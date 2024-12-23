import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color } from "./globalStyle";
import { FlexBox } from "./flex.styles";

export const GroupButtonContainer = styled(FlexBox)`
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  button {
    &:disabled {
      color: ${color.lightGray};
      background: ${color.lightestGray};
      cursor: not-allowed;
    }
  }
`;

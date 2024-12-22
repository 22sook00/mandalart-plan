import styled from "@emotion/styled";

type FlexType = {
  w?: string;
  justify?: string;
  items?: string;
  gap?: number;
};

export const FlexBox = styled.div<FlexType>`
  width: ${({ w }) => w ?? "fit-content"};
  display: flex;
  justify-content: ${({ justify }) => justify ?? "flex-start"};
  align-items: ${({ items }) => items ?? "flex-start"};
  gap: ${({ gap }) => `${gap}px`};
`;

export const FlexCol = styled(FlexBox)`
  flex-direction: column;
`;

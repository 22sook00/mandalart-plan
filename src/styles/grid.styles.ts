import styled from "@emotion/styled";

type GridType = {
  justify?: string;
  items?: string;
  col?: string;
  row?: string;
  gap?: number;
};

export const GridBox = styled.div<GridType>`
  display: grid;
  grid-template-columns: ${({ col }) => col ?? "1fr"};
  grid-template-rows: ${({ row }) => row ?? "1fr"};
  gap: ${({ gap }) => `${gap || 0}px`};
  justify-content: ${({ justify }) => justify ?? "Grid-start"};
  align-items: ${({ items }) => items ?? "Grid-start"};
`;

export const GridCol = styled(GridBox)`
  flex-direction: column;
`;

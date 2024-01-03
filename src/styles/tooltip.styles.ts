import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color } from "./globalStyle";
import { keyframes } from "@emotion/react";
import { FlexBox, FlexCol } from "./flex.styles";
import { TooltipProps } from "../components/common/Tooltip";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const tooltipWrapper = css`
  opacity: 0;
  position: absolute;
  animation: ${fadeIn} 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
`;

export const tooltipHidden = css`
  opacity: 0;
  animation: ${fadeOut} 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
`;

export const tooltipVisible = css`
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;
export const TooltipContainer = styled.div<Omit<TooltipProps, "children">>`
  position: absolute;
  top: ${({ position, topLocate }) =>
    position?.includes("top") && `${topLocate}px`};
  left: ${({ position, leftLocate }) =>
    position?.includes("left") && `${leftLocate}px`};
  right: ${({ position, rightLocate }) =>
    position?.includes("right") && `${rightLocate}px`};
  bottom: ${({ position, bottomLocate }) =>
    position?.includes("bottom") && `${bottomLocate}px`};
  z-index: 10;
  box-shadow: ${color.defaultShadow};
  ${tooltipWrapper}
  ${tooltipVisible}
  ${tooltipVisible}
`;

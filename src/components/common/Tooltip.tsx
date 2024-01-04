import React, { FC } from "react";
import * as SC from "../../styles/tooltip.styles";

export interface TooltipProps {
  position?: string[];
  topLocate?: number;
  bottomLocate?: number;
  rightLocate?: number;
  leftLocate?: number;
  children: React.ReactNode;
  className?: {};
}
const Tooltip: FC<TooltipProps> = ({
  position = ["right"],
  children,
  topLocate = 0,
  leftLocate = 0,
  rightLocate = 0,
  bottomLocate = 0,
  className,
}) => {
  return (
    <SC.TooltipContainer
      position={position}
      leftLocate={leftLocate}
      rightLocate={rightLocate}
      bottomLocate={bottomLocate}
      topLocate={topLocate}
      {...className}
    >
      {children}
    </SC.TooltipContainer>
  );
};

export default Tooltip;

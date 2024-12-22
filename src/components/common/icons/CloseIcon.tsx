import React from "react";

export type IconProps = {
  size?: number;
  color?: string;
};
const CloseIcon = ({ size = 18, color = "#334155" }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="8.93061"
        y1="23.0712"
        x2="23.0727"
        y2="8.9291"
        stroke={color}
        strokeWidth="1.5"
      />
      <line
        x1="23.0712"
        y1="23.0713"
        x2="8.9291"
        y2="8.92921"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default CloseIcon;

import React from "react";

export type IconProps = {
  size?: number;
  color?: string;
  onClick?: () => void;
};
const chevronRightIcon = ({ size = 20, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      width={`${size}px`}
      height={`${size}px`}
      color={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};

export default chevronRightIcon;

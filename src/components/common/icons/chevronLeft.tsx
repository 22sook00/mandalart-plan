import React from "react";
import { IconProps } from "./chevronRight";

const chevronLeftIcon = ({ size = 20, color, onClick }: IconProps) => {
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
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export default chevronLeftIcon;

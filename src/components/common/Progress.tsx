import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as SC from "../../styles/progress.styles";

const Progress = () => {
  const location = useLocation()?.pathname;
  const step =
    location === "/step1"
      ? 1
      : location === "/step2"
      ? 2
      : location === "/step3"
      ? 3
      : 4;

  return (
    <SC.ProgressContainer>
      <SC.ProgressBar step={step}></SC.ProgressBar>
    </SC.ProgressContainer>
  );
};

export default Progress;

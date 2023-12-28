import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as SC from "../../styles/progress.styles";

const Progress = () => {
  const location = useLocation()?.pathname;
  const step = location === "/step1" ? 1 : location === "/step2" ? 2 : 3;

  return (
    <SC.ProgressContainer>
      <SC.ProgressBar step={step}>
        {/*<SC.ProgressText>STEP 2</SC.ProgressText>*/}
      </SC.ProgressBar>
    </SC.ProgressContainer>
  );
};

export default Progress;

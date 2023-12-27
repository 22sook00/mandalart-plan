import React from "react";
import * as SC from "../../styles/mandalart.styles";

const Progress = () => {
  return (
    <SC.MandalartProgress>
      <SC.MandalartProgressBar step={2}></SC.MandalartProgressBar>
    </SC.MandalartProgress>
  );
};

export default Progress;

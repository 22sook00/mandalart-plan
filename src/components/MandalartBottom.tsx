import React from "react";
import { SookButton, SookFlex } from "react-sook-style";
import * as SC from "../styles/bottom.styles";
import Progress from "./common/Progress";

import ChevronLeftIcon from "./common/icons/chevronLeft";
import ChevronRightIcon from "./common/icons/chevronRight";
import { useNavigate } from "react-router-dom";
import { color } from "../styles/globalStyle";

interface MandalartBottomProps {
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  prevUrl?: string;
}

const MandalartBottom = ({
  prevDisabled = false,
  nextDisabled = false,
  prevUrl = "/",
}: MandalartBottomProps) => {
  const navigate = useNavigate();

  return (
    <SC.BottomContainer>
      <Progress />
      <SookFlex col={false} gap={10} justify="space-between">
        <SC.BottomButton
          position={"left"}
          disabled={prevDisabled}
          type="button"
          onClick={() => navigate(prevUrl)}
        >
          <ChevronLeftIcon
            color={prevDisabled ? color.disabledText : color.textLight}
            size={14}
          />
          Back
        </SC.BottomButton>
        <SC.BottomButton
          disabled={nextDisabled}
          position={"right"}
          type="submit"
        >
          Next
          <ChevronRightIcon
            color={nextDisabled ? color.disabledText : color.textLight}
            size={14}
          />
        </SC.BottomButton>
      </SookFlex>
    </SC.BottomContainer>
  );
};

export default MandalartBottom;

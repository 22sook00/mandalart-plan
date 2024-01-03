import { SookFlex, SookGrid } from "react-sook-style";
import Introduce from "./Introduce";
import MandalartForm from "../mandalartForm/MandalartForm";
import QuestionMarkIcon from "../common/icons/questionMark";
import * as SC from "../../styles/mandalartForm.styles";
import Tooltip from "../common/Tooltip";
import { useState } from "react";
import {
  tooltipHidden,
  tooltipVisible,
  tooltipWrapper,
} from "../../styles/tooltip.styles";
import { FlexBox } from "../../styles/flex.styles";

const Init = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <SC.MandalartContainer>
      <SC.MandalartSubTitle>갓생 실천의 첫 시작,</SC.MandalartSubTitle>
      <SC.GradationTitle>mandalart</SC.GradationTitle>
      <FlexBox items="center" gap={12}>
        <SC.MandalartDesc>만다라트란?</SC.MandalartDesc>
        <SC.SvgWrapper
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <QuestionMarkIcon color={"#334155"} />
          {isHover && (
            <Tooltip
              className={[
                tooltipWrapper,
                isHover ? tooltipVisible : tooltipHidden,
              ]}
              position={["left", "top"]}
              topLocate={0}
              leftLocate={20}
            >
              <Introduce />
            </Tooltip>
          )}
        </SC.SvgWrapper>
      </FlexBox>

      <MandalartForm />
    </SC.MandalartContainer>
  );
};

export default Init;

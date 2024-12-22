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
      {/*<SC.IntroSection>
        <SC.MandalartSubTitle>작은 목표가 만드는 큰 변화,</SC.MandalartSubTitle>
        <SC.GradationTitle>mandalart</SC.GradationTitle>
        <FlexBox items="center" gap={2}>
          <SC.MandalartDesc>만다라트란?</SC.MandalartDesc>
          <SC.SvgWrapper
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <QuestionMarkIcon />
            {isHover && (
              <Tooltip
                className={[
                  tooltipWrapper,
                  isHover ? tooltipVisible : tooltipHidden,
                ]}
                position={["left", "top"]}
                topLocate={20}
                rightLocate={40}
              >
                <Introduce />
              </Tooltip>
            )}
          </SC.SvgWrapper>
        </FlexBox>
      </SC.IntroSection>*/}
      <MandalartForm />
      <SC.MandalartFooter>
        <a
          href="https://github.com/22sook00/mandalart-plan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FlexBox gap={4}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.64 7.64 0 0 1 2-.27c.68.01 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <p>22sook00</p>
          </FlexBox>
        </a>
      </SC.MandalartFooter>
    </SC.MandalartContainer>
  );
};

export default Init;

import { SookGrid } from "react-sook-style";
import { MandalartData } from "../data/initGoal";
import * as SC from "../styles/mandalart.styles";
import * as FlexSC from "../styles/flex.styles";
import { Fragment, useState } from "react";
import MandalartItem from "./MandalartItem";
import MandalartBottom from "./MandalartBottom";
const Mandalart = () => {
  const [isActive, setIsActive] = useState(false);
  const [step, setsTep] = useState(1);
  const handleContainerClick = (e: any) => {
    // .container를 클릭할 때만 isActive를 토글합니다.
    if (e.target.classList.contains("container")) {
      setIsActive(!isActive);
    }
  };

  return (
    <SC.MandalartContainer>
      <SC.MandalartTitle>2024 만다라트 계획표</SC.MandalartTitle>
      <FlexSC.FlexCol
        style={{ overflow: "scroll", height: "100%", paddingBottom: "150px" }}
        gap={20}
        items="center"
      >
        <SookGrid col={"repeat(3, 1fr)"} gap={12}>
          {Array.from({ length: 9 }).map((_, idx) => {
            return (
              <Fragment key={`mandalartItem-${idx + 1}`}>
                <MandalartItem
                  MandalartSubData={MandalartData.find(
                    (goal) => goal.id === idx + 1
                  )}
                />
              </Fragment>
            );
          })}
        </SookGrid>
      </FlexSC.FlexCol>

      <MandalartBottom />
    </SC.MandalartContainer>
  );
};

export default Mandalart;

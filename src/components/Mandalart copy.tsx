import { SookCard, SookGrid } from "react-sook-style";
import { MandalartData } from "../data/initGoal";
import * as SC from "../styles/mandalart.styles";
import * as FlexSC from "../styles/flex.styles";
import { useState } from "react";
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
      <SookGrid col={"repeat(3, 1fr)"} gap={10}>
        {/*{MandalartData.map((list) => {
          return (
            <SookCard
              onClick={() => console.log(list.goal)}
              size="sm"
              key={list.id}
              title={list.goal}
            >
              {list.code}
            </SookCard>
          );
        })}*/}
        <FlexSC.FlexBox gap={10}>
          <SC.MandalartBTN onClick={() => setsTep(step - 1)}>
            이전
          </SC.MandalartBTN>
          <SC.MandalartBTN>전체삭제</SC.MandalartBTN>
          <SC.MandalartBTN onClick={() => setsTep(step + 1)}>
            다음
          </SC.MandalartBTN>
        </FlexSC.FlexBox>
        <SC.MandalartGridContainer onClick={handleContainerClick}>
          <SC.MandalartContentContainer
            isActive={isActive}
            className="container"
          >
            <p className="title">🍊 주요 목표를 입력해주세요.</p>
            <SC.MandalartINPUT placeholder="주요 목표" />
          </SC.MandalartContentContainer>
        </SC.MandalartGridContainer>
        <SC.MandalartContentContainer>
          <p className="title">🍊주요 목표를 입력해주세요.</p>
          <SC.MandalartINPUT placeholder="주요 목표" />
        </SC.MandalartContentContainer>
        <SC.MandalartContentContainer>
          <p className="title">🍊 주요 목표를 입력해주세요.</p>
          <SC.MandalartINPUT placeholder="주요 목표" />
        </SC.MandalartContentContainer>
        <SC.MandalartContentContainer>
          <p className="title">🍊 주요 목표를 입력해주세요.</p>
          <SC.MandalartINPUT placeholder="주요 목표" />
        </SC.MandalartContentContainer>
        <SC.MandalartContentContainer primary>
          <p className="title">🍒 핵심 목표를 입력해주세요.</p>
          <SC.MandalartINPUT placeholder="핵심 목표" />
        </SC.MandalartContentContainer>
        <SC.MandalartContentContainer>
          <p className="title">🍊 주요 목표를 입력해주세요.</p>
          <SC.MandalartINPUT placeholder="주요 목표" />
        </SC.MandalartContentContainer>
      </SookGrid>
    </SC.MandalartContainer>
  );
};

export default Mandalart;

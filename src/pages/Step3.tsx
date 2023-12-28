import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { SookButton, SookFlex, SookGrid } from "react-sook-style";
import * as SC from "../styles/mandalart.styles";
import Form from "../components/common/Form";
import MandalartFormContent from "../components/MandalartFormContent";

import { step3State, step2State } from "../atoms/mandalartAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import MandalartBottom from "../components/MandalartBottom";
import { errorButtonState } from "../atoms/errorAtom";
import { EmojiData } from "../data/initGoal";
import { useState } from "react";

const Step3 = () => {
  const navigate = useNavigate();
  const setDetailGoal = useSetRecoilState(step3State);
  const getSubGoal = useRecoilValue(step2State);

  const goalArr = Object.entries(getSubGoal);

  const [selectSubGoal, setSelectSubGoal] = useState(goalArr[0][1] || "");
  const isError = useRecoilValue(errorButtonState);

  const handleSubmitSubGoal = (data: any) => {
    console.log("STEP@", data);

    //리코일에 두번째 스텝 넣기
    //넣은 후 스텝T3로 이동.
    setDetailGoal(data);
    navigate("/complete");
  };

  return (
    <SC.MandalartContainer>
      <Form onSubmit={handleSubmitSubGoal}>
        <SookGrid col="1fr 320px" gap={30} justify="center">
          <SC.MandalartStep3ListContainer>
            <SC.MandalartTitle className="title">
              {getSubGoal.mainGoal}
            </SC.MandalartTitle>
            <SC.MandalartStep3List>
              <SookGrid col="repeat(3, 1fr)" gap={14}>
                {goalArr.map((subArr, i) => {
                  return (
                    <SookFlex
                      col={false}
                      key={`sub-goal-${i}`}
                      item="center"
                      gap={10}
                    >
                      <div
                        className="card"
                        onClick={() => setSelectSubGoal(subArr[1] as string)}
                      >
                        <div className="card-item">{`${subArr[1]}`}</div>
                      </div>
                    </SookFlex>
                  );
                })}
              </SookGrid>
            </SC.MandalartStep3List>
          </SC.MandalartStep3ListContainer>
          {/*TODO 리스트 폼 설계 다시하기 : 각각의 서브주제에 맞는 폼이 있어야 한다. 8개의 분기처리 필요.*/}
          <SC.MandalartStep3FormContainer>
            <SC.MandalartStep3Form>
              <SookFlex justify="flex-start" gap={12}>
                <SC.MandalartSubTitle className="subTitle">
                  {selectSubGoal as string}
                </SC.MandalartSubTitle>
              </SookFlex>
              <SookFlex gap={10}>
                {Array.from({ length: 8 }).map((_, i: number) => {
                  return (
                    <SookFlex
                      col={false}
                      key={`sub-goal-${i}`}
                      item="center"
                      justify="flex-start"
                      gap={10}
                    >
                      <span className="icon">{EmojiData[i + 1]}</span>
                      <input placeholder={`${i + 1}번 목표를 작성하세요.`} />
                    </SookFlex>
                  );
                })}
              </SookFlex>
              <SookFlex col={false} justify="flex-end">
                <SookButton
                  customStyle={{ padding: "6px 18px" }}
                  size="sm"
                  onClick={() => console.log("저장")}
                >
                  저장
                </SookButton>
              </SookFlex>
            </SC.MandalartStep3Form>
          </SC.MandalartStep3FormContainer>
        </SookGrid>
        <MandalartBottom prevUrl="/step2" nextDisabled={isError} />
      </Form>
    </SC.MandalartContainer>
  );
};

export default Step3;

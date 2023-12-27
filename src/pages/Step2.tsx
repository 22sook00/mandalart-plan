import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { SookFlex, SookGrid } from "react-sook-style";
import * as SC from "../styles/mandalart.styles";
import Form from "../components/common/Form";
import MandalartFormContent from "../components/MandalartFormContent";

import { step2State } from "../atoms/mandalartAtom";
import { useSetRecoilState } from "recoil";

const Step2 = () => {
  const navigate = useNavigate();
  const setSubGoal = useSetRecoilState(step2State);

  const handleSubmitSubGoal = (data: any) => {
    console.log("STEP@", data);

    //리코일에 두번째 스텝 넣기
    //넣은 후 스텝T3로 이동.
    setSubGoal(data);
    navigate("/step3");
  };

  return (
    <SC.MandalartContainer>
      <Form onSubmit={handleSubmitSubGoal}>
        <SookGrid col={"repeat(3, 230px)"} gap={12} justify="center">
          {Array.from({ length: 9 }).map((_, idx) => {
            return (
              <Fragment key={`mandalartItem-${idx + 1}`}>
                <MandalartFormContent
                  title={
                    idx === 4
                      ? "🍒 핵심 목표를 입력해주세요."
                      : "🍊 주요 목표를 입력해주세요."
                  }
                  readOnly={idx === 4}
                  selectGoal={idx === 4 ? "mainGoal" : `subGoal-${idx}`}
                />
              </Fragment>
            );
          })}
        </SookGrid>
        <SookFlex gap={10} col={false} justify="flex-end">
          <SC.MandalartBTN type="button" onClick={() => navigate("/step1")}>
            Prev
          </SC.MandalartBTN>

          <SC.MandalartBTN>NEXT</SC.MandalartBTN>
        </SookFlex>
      </Form>
    </SC.MandalartContainer>
  );
};

export default Step2;

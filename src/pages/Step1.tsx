import React from "react";
import * as SC from "../styles/mandalart.styles";
import * as FlexSC from "../styles/flex.styles";
import Form from "../components/common/Form";
import MandalartFormContent from "../components/MandalartFormContent";

import Input from "../components/common/Input";
import { INPUT_ERROR, INPUT_PLACEHOLDER } from "../data/formData";

import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { step1State } from "../atoms/mandalartAtom";
import MandalartBottom from "../components/MandalartBottom";
import { errorButtonState } from "../atoms/errorAtom";

const Step1 = () => {
  const navigate = useNavigate();
  const setMainGoal = useSetRecoilState(step1State);
  const isError = useRecoilValue(errorButtonState);
  const handleSubmitGoal = (data: any) => {
    setMainGoal(data);
    navigate("/step2");
  };

  return (
    <SC.MandalartContainer>
      <SC.MandalartStep1Wrapper>
        <SC.MandalartSubTitle>STEP 1.</SC.MandalartSubTitle>
        <SC.MandalartTitle>🍒 핵심 목표를 입력해주세요.</SC.MandalartTitle>

        <SC.MandalartStep1FormWrapper>
          <Form onSubmit={handleSubmitGoal} type="mainGoal">
            <Input
              maxLength={40}
              placeholder={INPUT_PLACEHOLDER.mainGoal}
              value={"mainGoal"}
              required={{
                value: true,
                message: INPUT_ERROR.goal.empty,
              }}
              style={{ height: "43px" }}
            />

            <MandalartBottom nextDisabled={isError} />
          </Form>
        </SC.MandalartStep1FormWrapper>
      </SC.MandalartStep1Wrapper>
    </SC.MandalartContainer>
  );
};

export default Step1;

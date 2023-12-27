import React from "react";
import * as SC from "../styles/mandalart.styles";
import * as FlexSC from "../styles/flex.styles";
import Form from "../components/common/Form";
import MandalartFormContent from "../components/MandalartFormContent";

import Input from "../components/common/Input";
import { INPUT_ERROR, INPUT_PLACEHOLDER } from "../data/formData";

import { useNavigate } from "react-router-dom";
import { SookButton } from "react-sook-style";
import { useSetRecoilState } from "recoil";
import { step1State } from "../atoms/mandalartAtom";

const Step1 = () => {
  const navigate = useNavigate();
  const setMainGoal = useSetRecoilState(step1State);

  const handleSubmitGoal = (data: any) => {
    console.log("DATA", data);

    setMainGoal(data);
    navigate("/step2");
  };

  return (
    <SC.MandalartContainer>
      <SC.MandalartStep1Wrapper>
        <SC.MandalartTitle>STEP 1.</SC.MandalartTitle>
        <h1 className="title">🍒 핵심 목표를 입력해주세요.</h1>
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

            <SC.MandalartBTN size={"full"}>NEXT</SC.MandalartBTN>
          </Form>
        </SC.MandalartStep1FormWrapper>
      </SC.MandalartStep1Wrapper>
    </SC.MandalartContainer>
  );
};

export default Step1;

import React, { useEffect } from "react";
import Form from "../components/common/Form";

import { INPUT_ERROR, INPUT_PLACEHOLDER } from "../data/formData";

import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { step1State } from "../atoms/mandalartAtom";
import { errorButtonState } from "../atoms/errorAtom";

import MandalartBottom from "../components/MandalartBottom";
import Input from "../components/common/Input";

import * as SC from "../styles/mandalart.styles";
import * as FormSC from "../styles/input.styles";
import { FormProvider, useForm, useWatch } from "react-hook-form";

const Step1 = () => {
  const navigate = useNavigate();

  const methods = useForm<any>({
    mode: "onChange",
    defaultValues: {},
  });
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = methods;

  const [mainGoal] = useWatch({
    control,
    name: ["mainGoal"],
  });

  const setMainGoal = useSetRecoilState(step1State);
  const getMainGoal = useRecoilValue(step1State);

  const handleSubmitStep1 = (data: { mainGoal: string }) => {
    setMainGoal(data.mainGoal);
    navigate("/step2");
  };

  useEffect(() => {
    if (getMainGoal) {
      setValue("mainGoal", getMainGoal);
    }
  }, [getMainGoal, setValue]);

  return (
    <SC.MandalartContainer>
      <SC.MandalartStep1Wrapper>
        <SC.MandalartSubTitle>STEP 1.</SC.MandalartSubTitle>
        <SC.MandalartTitle>❤️‍🔥 핵심 목표를 입력 하세요.</SC.MandalartTitle>
        <FormProvider {...methods}>
          <FormSC.FormContainer onSubmit={handleSubmit(handleSubmitStep1)}>
            <SC.MandalartStep1FormWrapper>
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

              <MandalartBottom
                nextDisabled={errors?.mainGoal || !mainGoal ? true : false}
              />
            </SC.MandalartStep1FormWrapper>
          </FormSC.FormContainer>
        </FormProvider>
      </SC.MandalartStep1Wrapper>
    </SC.MandalartContainer>
  );
};

export default Step1;

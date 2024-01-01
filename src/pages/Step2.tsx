import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SookFlex, SookGrid } from "react-sook-style";
import Form from "../components/common/Form";
import MandalartFormContent from "../components/MandalartFormContent";

import { step2State } from "../atoms/mandalartAtom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import MandalartBottom from "../components/MandalartBottom";
import { errorButtonState } from "../atoms/errorAtom";

import * as SC from "../styles/mandalart.styles";
import * as FormSC from "../styles/input.styles";
import { FormProvider, useForm, useWatch } from "react-hook-form";

const Step2 = () => {
  const navigate = useNavigate();
  const setSubGoal = useSetRecoilState(step2State);
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

  //const isError = useRecoilValue(errorButtonState);

  const handleSubmitStep2 = (data: any) => {
    console.log("STEP@", data);

    //리코일에 두번째 스텝 넣기
    //넣은 후 스텝T3로 이동.
    setSubGoal(data);
    navigate("/step3");
  };

  //useEffect(() => {
  //  if (mainGoal) {
  //    setValue("mainGoal", mainGoal);
  //  }
  //}, [mainGoal, setValue]);

  return (
    <SC.MandalartContainer>
      <SC.MandalartStep2Wrapper>
        <SC.MandalartSubTitle>STEP 2.</SC.MandalartSubTitle>
        <SC.MandalartTitle>
          🔥 목표를 이루기 위한 키워드를 입력 하세요.
        </SC.MandalartTitle>
        {/*<Form onSubmit={handleSubmitSubGoal}>*/}
        <FormProvider {...methods}>
          <FormSC.FormContainer onSubmit={handleSubmit(handleSubmitStep2)}>
            <SookGrid col={"repeat(3, 230px)"} gap={12} justify="center">
              {Array.from({ length: 9 }).map((_, idx) => {
                return (
                  <Fragment key={`mandalartItem-${idx + 1}`}>
                    <MandalartFormContent
                      title={
                        idx === 4
                          ? "핵심 목표"
                          : `키워드 ${idx < 5 ? idx + 1 : idx}`
                      }
                      readOnly={idx === 4}
                      selectGoal={idx === 4 ? "mainGoal" : `subGoal-${idx}`}
                    />
                  </Fragment>
                );
              })}
            </SookGrid>
            <MandalartBottom
              prevUrl="/step1"
              nextDisabled={!!Object.keys(errors)?.length}
            />
            {/*</Form>*/}
          </FormSC.FormContainer>
        </FormProvider>
      </SC.MandalartStep2Wrapper>
    </SC.MandalartContainer>
  );
};

export default Step2;

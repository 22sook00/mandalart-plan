import React, { SetStateAction } from "react";
import { SookButton, SookCard, SookFlex, SookGrid } from "react-sook-style";
import * as SC from "../../styles/mandalart.styles";
import { EmojiData } from "../../data/initGoal";
import Input from "../common/Input";
import { INPUT_ERROR, INPUT_PLACEHOLDER } from "../../data/formData";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorButtonState } from "../../atoms/errorAtom";
import { useFormContext } from "react-hook-form";
import { step3DetailState } from "../../atoms/mandalartAtom";
import { useEffect } from "react";

interface MandalartFormProps {
  selectSubGoal: string;
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

const MandalartForm = ({ selectSubGoal, setIsOpen }: MandalartFormProps) => {
  //const isError = useRecoilValue(errorButtonState);
  const {
    getValues,
    reset,
    setValue,
    formState: { errors },
  } = useFormContext();

  const setDetailGoal = useSetRecoilState(step3DetailState);
  const savedDetailGoal = useRecoilValue(step3DetailState);

  const handleSaveDetailGoals = () => {
    setIsOpen(false);
    //recoil에 selectSubGoal을 키로 두고 나머지  저장 detail
    const values = getValues();
    setDetailGoal({ detail: values });
  };
  const handleReset = () => {
    console.log("RESET");
  };

  useEffect(() => {
    reset(savedDetailGoal.detail);
  }, [reset, savedDetailGoal]);

  useEffect(() => {
    setValue("selectSubGoal", selectSubGoal);
  }, [selectSubGoal, setValue]);

  return (
    <SC.MandalartStep3FormContainer>
      <SC.MandalartStep3Form>
        <SookGrid col="1fr 1fr 1fr" gap={12}>
          {Array.from({ length: 9 }).map((_, i: number) => {
            return (
              <SookFlex
                col={false}
                key={`sub-goal-${i}`}
                justify="flex-start"
                item="flex-start"
                gap={10}
              >
                {/*<span className="icon">{EmojiData[i + 1]}</span>*/}
                {i === 4 ? (
                  <SookCard>
                    <Input
                      value={"selectSubGoal"}
                      style={{ height: "43px" }}
                      readOnly={true}
                    />
                  </SookCard>
                ) : (
                  <SookCard>
                    <Input
                      maxLength={40}
                      placeholder={INPUT_PLACEHOLDER.detailGoal}
                      value={`${selectSubGoal}-${i}`}
                      style={{ height: "43px" }}
                    />
                  </SookCard>
                )}
              </SookFlex>
            );
          })}
        </SookGrid>
        <SookFlex col={false} justify="flex-end">
          <SookButton
            customStyle={{ width: "100px" }}
            size="lg"
            theme="outline"
            onClick={handleReset}
            type="reset"
          >
            리셋
          </SookButton>
          <SookButton
            customStyle={{ width: "100px" }}
            size="lg"
            onClick={handleSaveDetailGoals}
          >
            저장
          </SookButton>
        </SookFlex>
      </SC.MandalartStep3Form>
    </SC.MandalartStep3FormContainer>
  );
};

export default MandalartForm;

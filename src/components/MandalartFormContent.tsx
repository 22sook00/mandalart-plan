import React from "react";
import Input from "./common/Input";
import { INPUT_ERROR, INPUT_PLACEHOLDER } from "../data/formData";

import * as SC from "../styles/mandalart.styles";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { step1State, step2State } from "../atoms/mandalartAtom";

interface MandalartFormContentProps {
  selectGoal: string;
  title: string;
  readOnly?: boolean;
  //value?: string;
}
const MandalartFormContent = ({
  selectGoal,
  title,
  readOnly,
}: //value,
MandalartFormContentProps) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const mainGoal = useRecoilValue(step1State);
  const subGoal = useRecoilValue(step2State);

  useEffect(() => {
    setValue("mainGoal", mainGoal);

    Array.from({ length: 9 }).map((_, idx) => {
      return setValue(`subGoal-${idx}`, Object.values(subGoal)[idx]);
    });
  }, [mainGoal, setValue, subGoal]);

  return (
    <SC.MandalartContentContainer>
      <h3 className="title">{title}</h3>
      <Input
        maxLength={40}
        placeholder={
          selectGoal ? INPUT_PLACEHOLDER.goal : INPUT_PLACEHOLDER.mainGoal
        }
        value={selectGoal}
        required={{
          value: true,
          message: INPUT_ERROR.goal.empty,
        }}
        readOnly={readOnly}
      />
    </SC.MandalartContentContainer>
  );
};

export default MandalartFormContent;

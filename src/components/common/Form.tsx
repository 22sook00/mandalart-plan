import React from "react";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import * as SC from "../../styles/input.styles";
import { errorButtonState } from "../../atoms/errorAtom";

interface FormProps {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  type?: {};
}

const Form = ({ type, children, onSubmit }: FormProps) => {
  const setErrorButton = useSetRecoilState(errorButtonState);
  const methods = useForm<any>({
    mode: "onChange",
    defaultValues: {},
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    const isError = Object.keys(errors)?.length ? true : false;
    setErrorButton(isError);
  });

  return (
    <FormProvider {...methods}>
      <SC.FormContainer onSubmit={handleSubmit(onSubmit)}>
        {children}
      </SC.FormContainer>
    </FormProvider>
  );
};

export default Form;

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as SC from "../../styles/input.styles";

interface FormProps {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  type?: {};
}

const Form = ({ type, children, onSubmit }: FormProps) => {
  const methods = useForm<any>({
    mode: "onChange",
    defaultValues: {},
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <SC.FormContainer onSubmit={handleSubmit(onSubmit)}>
        {children}

        {/*<GroupButton
          confirmText="다음"
          handleConfirmPopup={handleSubmit(onSubmit)}
          handleClosePopup={handleClosePopup}
          disabled={errors[value]?.message ? true : false}
        />*/}
      </SC.FormContainer>
    </FormProvider>
  );
};

export default Form;

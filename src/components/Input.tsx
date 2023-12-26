import { useFormContext } from "react-hook-form";

import * as SC from "../styles/input.styles";

interface InputProps {
  type?: any;
  textarea: boolean;
  errorMsg: string;
  placeholder: string;
  value: string;
  readOnly: boolean;
  required?: boolean;
  validatePattern?: any;
  blurEvent?: () => void;
  changeEvent?: (e?: any) => void;
  validateFunc?: any;
  maxTextLength: number;
  maxLength: number;
  errFocus: any;
  textLength: number;
  textLengthInner?: boolean;
  style?: any;
}

const InputForm = ({
  type = "text",
  textarea = false,
  errorMsg,
  placeholder,
  value,
  readOnly = false,
  required,
  validatePattern,
  blurEvent,
  changeEvent,
  validateFunc,
  maxTextLength = 1000,
  maxLength,
  errFocus,
  textLength,
  textLengthInner = false,
  style,
  ...props
}: InputProps) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const getMaxLengthValue = (value: string) =>
    value.length > maxLength ? value.slice(0, maxLength) : value;

  return (
    <SC.InputContainer>
      {textarea ? (
        <>
          <SC.TextareaForm
            readOnly={readOnly}
            errors={errors[value] || errFocus}
            placeholder={placeholder}
            {...register(value, {
              validate: validateFunc && {
                check: validateFunc,
              },
              pattern: validatePattern,
              onBlur: blurEvent,
              onChange: (e) => {
                if (maxLength)
                  setValue(value, getMaxLengthValue(e.target.value), {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                if (changeEvent) changeEvent(e);
              },
              required: required,
            })}
            maxLength={maxLength}
            style={style}
          />
          {textLength > 0 && (
            <SC.TextareaFormLength>
              <span>{textLength}</span> / {maxTextLength}
            </SC.TextareaFormLength>
          )}
        </>
      ) : (
        <>
          <SC.InputForm
            className="inputForm"
            readOnly={readOnly}
            errors={errors[value] || errFocus}
            type={type}
            placeholder={placeholder}
            {...register(value, {
              validate: validateFunc && {
                check: validateFunc,
              },
              pattern: validatePattern,
              onBlur: blurEvent,
              onChange: (e) => {
                if (maxLength)
                  setValue(value, getMaxLengthValue(e.target.value), {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                if (changeEvent) changeEvent(e);
              },
              required: required,
            })}
            maxLength={maxLength}
            {...props}
          />
          {(() => {
            const err = errors[value] || errFocus;
            if (err && err.message) {
              return (
                <p style={{ textAlign: "right" }} className="errorText">
                  {err.message}
                </p>
              );
            }
          })()}
        </>
      )}
    </SC.InputContainer>
  );
};

export default InputForm;

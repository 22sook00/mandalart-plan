import { useFormContext } from "react-hook-form";

import * as SC from "../../styles/input.styles";

interface InputProps {
  type?: any;
  textarea?: boolean;
  errorMsg?: string;
  placeholder?: string;
  value: string;
  readOnly?: boolean;
  required?: boolean | any;
  validatePattern?: any;
  blurEvent?: () => void;
  changeEvent?: (e?: any) => void;
  validateFunc?: any;
  maxTextLength?: number;
  maxLength?: number;
  errFocus?: any;
  textLength?: number;
  textLengthInner?: boolean;
  style?: any;
}

const Input = ({
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
  maxLength = 100,
  errFocus,
  textLength = 0,
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
            autoComplete="off"
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
            {...props}
          />
          {(() => {
            const err = errors[value] || errFocus;
            if (err && err.message) {
              return <SC.InputErrorText>{err.message}</SC.InputErrorText>;
            }
          })()}
        </>
      )}
    </SC.InputContainer>
  );
};

export default Input;

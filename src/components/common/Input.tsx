import { useFormContext } from "react-hook-form";

import * as SC from "../../styles/mandalartForm.styles";

interface InputProps {
  type?: any;
  isMain?: boolean;
  placeholder?: string;
  value: string;
  readOnly?: boolean;
  required?: boolean | any;
  validatePattern?: any;
  blurEvent?: () => void;
  changeEvent?: (e?: any) => void;
  validateFunc?: any;
  maxLength?: number;
  errFocus?: any;
  style?: any;
}

const Input = ({
  type = "text",
  isMain,
  placeholder,
  value,
  readOnly = false,
  required,
  validatePattern,
  blurEvent,
  changeEvent,
  validateFunc,
  maxLength = 100,
  errFocus,
  style,
}: InputProps) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const getMaxLengthValue = (value: string) =>
    value.length > maxLength ? value.slice(0, maxLength) : value;

  return (
    <SC.MandalartContent
      isMain={isMain}
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
  );
};

export default Input;

export const INPUT_VALIDATION = {
  email: /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/,
  password: /^.{6,20}$/,
  name: /^[가-힣a-zA-Z\d\s]+$/,
  birth: /^(\d{4})(\d{2})(\d{2})$/,
  cellPhone: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
  telephone: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
};

export const INPUT_PLACEHOLDER = {
  mainGoal: "핵심 목표를 입력해 주세요.",
  goal: "주요 목표를 입력해 주세요.",
  birth: { year: "생일연도(4자)", month: "월", day: "일" },
};
export const INPUT_ERROR = {
  email: {
    empty: "이메일을 입력해 주세요.",
    validation: "이메일 형식이 맞지 않습니다.",
    duplicate: "이미 사용중인 이메일입니다.",
  },
  password: {
    empty: "비밀번호를 입력해 주세요.",
    fail: "유효하지 않은 비밀번호입니다.",
  },
  passwordChk: {
    empty: "비밀번호를 확인해 주세요.",
    match: "비밀번호가 일치하지 않습니다.",
  },
  goal: {
    empty: "목표입력은 필수입니다.",
    validation: "정확한 목표를 입력해 주세요.",
  },
  address: {
    empty: "주소찾기 버튼을 통해 주소를 입력해 주세요.",
  },

  birth: {
    empty: "생년월일을 입력해 주세요.",
    validation: "생년월일을 확인해 주세요.",
    underAge: "14세 미만의 경우 가입이 제한됩니다.",
  },
};

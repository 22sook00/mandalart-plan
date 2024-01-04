export const INPUT_VALIDATION = {
  email: /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/,
  password: /^.{6,20}$/,
  name: /^[가-힣a-zA-Z\d\s]+$/,
  birth: /^(\d{4})(\d{2})(\d{2})$/,
  cellPhone: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
  telephone: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
};

export const INPUT_PLACEHOLDER = {
  mainGoal: "핵심 목표",
  goal: "목표 키워드",
  detailGoal: "세부 목표",
  birth: { year: "생일연도(4자)", month: "월", day: "일" },
};
export const INPUT_ERROR = {
  email: {
    empty: "이메일을 입력해 주세요.",
    validation: "이메일 형식이 맞지 않습니다.",
    duplicate: "이미 사용중인 이메일입니다.",
  },
  goal: {
    empty: "목표입력은 필수입니다.",
    validation: "정확한 목표를 입력해 주세요.",
  },
};

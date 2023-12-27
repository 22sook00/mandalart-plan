import { atom } from "recoil";

export const step1State = atom({
  key: "step1State", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const step2State = atom({
  key: "step2State", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const step3State = atom({
  key: "step3State", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

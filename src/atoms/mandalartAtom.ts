import { MandalartFormValueType } from "../data/defaultValue";
import { atom } from "recoil";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: any) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const mymandalartState = atom({
  key: "mymandalartState",
  default: MandalartFormValueType as any,
  effects: [localStorageEffect("my_mandalart")],
});

export const mobileBottomSheet = atom({
  key: "mobileBottomSheet",
  default: false,
});
export const mobileSelectCell = atom({
  key: "mobileSelectCell",
  default: {
    value: "",
    idx: 0,
    type: "center",
  },
});

//export const step1State = atom({
//  key: "step1State", // unique ID (with respect to other atoms/selectors)
//  default: "", // default value (aka initial value)
//});

//export const step2State = atom({
//  key: "step2State", // unique ID (with respect to other atoms/selectors)
//  default: {} as any, // default value (aka initial value)
//});

//export const step3DetailState = atom({
//  key: "step3DetailState", // unique ID (with respect to other atoms/selectors)
//  default: { detail: {} }, // default value (aka initial value)
//});

//export const step3State = atom({
//  key: "step3State", // unique ID (with respect to other atoms/selectors)
//  default: {} as any, // default value (aka initial value)
//});

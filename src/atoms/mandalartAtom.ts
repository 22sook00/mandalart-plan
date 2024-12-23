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

// recoil/counterState.js
const { atom } = require("recoil");
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const counterState = atom({
  key: "counterState", // 唯一鍵值
  default: 0,
  effects_UNSTABLE: [persistAtom], // 永久儲存
});

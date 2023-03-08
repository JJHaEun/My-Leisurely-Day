import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const isEditState = atom({
  key: "isEdit",
  default: false,
});
export const isOpenState = atom({
  key: "isOpen",
  default: false,
});
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export const visitedPageState = atom({
  key: "visitedPageState",
  default: "",
});
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

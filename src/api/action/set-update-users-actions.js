import { ACTION_TYPE } from "./action-type";

export const setUpdateUserAction = (data) => ({
  type: ACTION_TYPE.SET_UPDATE_USER,
  payload: data,
});

import { logoutOperation } from "../operations/logout";
import { ACTION_TYPE } from "./action-type";

export const logout = (userSession) => {
  logoutOperation(userSession);

  return {
    type: ACTION_TYPE.LOGOUT,
  };
};

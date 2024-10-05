import { updateUserRoleOperation } from "../operations/update-user-role-operation";

export const updateRoleAsync = (userId, newRoleId,userSession) => async (dispatch) => {
  await updateUserRoleOperation(userId, newRoleId,userSession);
};

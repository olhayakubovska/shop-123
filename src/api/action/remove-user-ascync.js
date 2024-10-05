import { removeUserOeration } from "../operations/remove-user-operation";

export const removeUserAsync = (userId) => async (dispatch) => {
  await removeUserOeration(userId);

};

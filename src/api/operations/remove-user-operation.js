import { deleteUser } from "../fetch/delete-user";

export const removeUserOeration = async (userId) => {
  deleteUser(userId);
  return true;
};

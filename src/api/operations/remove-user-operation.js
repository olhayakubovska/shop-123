import { deleteUser } from "../fetch";

export const removeUserOeration = async (userId) => {
  deleteUser(userId);
  return true;
};

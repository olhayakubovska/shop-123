import { setUpdateUserRole } from "../fetch/set-update-user-role";

export const updateUserRoleOperation = async (userId, newRoleId) => {
  const newRole = await setUpdateUserRole(userId, newRoleId);
  return newRole;
};

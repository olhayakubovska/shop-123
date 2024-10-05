import { ROLE } from "../../constants/role";
import { setUpdateUserRole } from "../fetch/set-update-user-role";
import { sessions } from "../sessions";

export const updateUserRoleOperation = async (
  userId,
  newRoleId,
  userSession
) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

  const access = await sessions.access(userSession, accessRoles);

  if (!access) {
    return {
      err: "Доступно только админу",
      res: null,
    };
  }

  const newRole = await setUpdateUserRole(userId, newRoleId);

  return {
    err: null,
    res: newRole,
  };
};

// const saveNewRole = async (userId, newUserRole) => {
//   try {
//     const updatedUser = await updateUserRoleOperation(userId, newUserRole);

//     // Убедитесь, что обновляется только пользователь с изменённой ролью
//     if (updatedUser.id === userId) {
//       dispatch(setUser(updatedUser));
//     }

//     setFlag(!flag); // Перезагружаем список пользователей
//   } catch (error) {
//     console.error("Ошибка при обновлении роли пользователя:", error);
//   }
// };

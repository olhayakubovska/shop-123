import { ROLE } from "../../constants";
import { setUpdateUserRole } from "../fetch";
import { sessions } from "../sessions";

export const updateRoleAsync = (userId, newRoleId, userSession) => async (dispatch) => {
  // const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
// console.log(userId, newRoleId, userSession,"2345")
  // Проверка доступа пользователя
  // const access = await sessions.access(userSession, accessRoles);

  // if (!access) {
  //   return {
  //     err: "Доступно только админу",
  //     res: null,
  //   };
  // }

  // Обновление роли пользователя
  const newRole = await setUpdateUserRole(userId, newRoleId);
  // console.log(newRole, "newRole op");

  return {
    err: null,
    res: newRole,
  };
};

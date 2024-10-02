import { setUpdateUserRole } from "../fetch/set-update-user-role";

export const updateUserRoleOperation = async (userId, newRoleId) => {
  const newRole = await setUpdateUserRole(userId, newRoleId);
  console.log(newRole, "newRole")
  return newRole;
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

// export const setUpdateUserRole = (userId, newRoleId) => {
//   fetch(`http://localhost:3007/users/${userId}`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json;charset=UTF-8" },
//     body: JSON.stringify({
//       roleId: newRoleId,
//     }),
//   })
//     .then((role) => role.json())
//     // .then((role) => console.log(role, "roleServer"));
// };

export const setUpdateUserRole = async (userId, newRoleId) => {
  try {
    const response = await fetch(`http://localhost:3007/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify({
        roleId: newRoleId,
      }),
    });

    if (!response.ok) {
      throw new Error("error");
    }

    const updatedUserRole = await response.json();

console.log(updatedUserRole,"updatedUserRole fetch")

    return updatedUserRole;
  } catch (error) {
    console.error("Ошибка при обновлении роли пользователя:", error);
  }
};
// export const setUpdateUserRole = (userId, newRoleId) => {
//   return fetch(`http://localhost:3007/users/${userId}`, {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json;charset=UTF-8" },
//     body: JSON.stringify({
//       roleId: newRoleId,
//     }),
//   })
//     .then((response) => response.json()) // Возвращаем результат в виде JSON
//     .catch((error) =>
//       console.error("Ошибка при обновлении роли пользователя:", error)
//     );
// };

export const setUpdateUserRole = (userId,newRoleId) => {
  fetch(`http://localhost:3007/users/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      roleId: newRoleId
    }),
  });
}



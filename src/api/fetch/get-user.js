export const transformUser = (dbUser) => ({
  id: dbUser.id,
  login: dbUser.login,
  password: dbUser.password,
  roleId: dbUser.roleId,
});

export const getUser = async (loginToFind) => {
  return fetch(`http://localhost:3007/users?login=${loginToFind}`)
    .then((loadedUser) => loadedUser.json())
    .then(([loadedUser]) => loadedUser && transformUser(loadedUser));
};

// export const transformUser = (dbUser) => ({
//   id: dbUser.id,
//   login: dbUser.login,
//   password: dbUser.password,
//   roleId: dbUser.roleId,
// });

// export const getUser = async (loginToFind) => {
//   return fetch(`http://localhost:3007/users?login=${loginToFind}`)
//     .then((loadedUser) => loadedUser.json())
//     .then(([loadedUser]) => loadedUser && transformUser(loadedUser));
// };

export const getUser = async (loginToFind) => {
  try {
    const response = await fetch(
      `http://localhost:3007/users?login=${loginToFind}`
    );

    if (!response.ok) {
      throw new Error("error getUser");
    }

    const user = await response.json();

    return user[0];
  } catch (error) {
    console.log("err", error);
    throw error;
  }
};

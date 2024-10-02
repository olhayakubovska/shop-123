export const getUsers = () => {
  return fetch("http://localhost:3007/users").then((loadedUser) =>
    loadedUser.json()
  );
};

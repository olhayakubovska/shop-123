export const getCategories = async () => {
  return fetch(`http://localhost:3007/categories`).then((loadedUser) =>
    loadedUser.json()
  );
};

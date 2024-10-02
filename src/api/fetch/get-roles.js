// export const getRoles = () => {
//   return fetch("http://localhost:3007/roles").then((loadedRoles) =>
//     loadedRoles.json()
//   );
// };
export const getRoles = () => {
  return fetch("http://localhost:3007/roles")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
      throw error; // Перебрасываем ошибку, если нужно обрабатывать дальше
    });
};

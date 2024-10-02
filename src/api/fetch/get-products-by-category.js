// export const getCategory = (categoryId) => {
//   fetch(`http://localhost:3007/products?categoryId=${categoryId}}`).then(
//     (loadedData) => loadedData.json()
//   );
// };
export const getProductsByCategory = (categoryId) => {
  return fetch(`http://localhost:3007/products?categoryId=${categoryId}`)
    .then((loadedData) => {
      if (!loadedData.ok) {
        throw new Error("Ошибка при получении данных");
      }
      return loadedData.json(); // Возвращаем преобразованные данные
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
};

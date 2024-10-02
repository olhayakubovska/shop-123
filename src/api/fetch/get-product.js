export const getProduct = (id) => {
  return fetch(`http://localhost:3007/products/${id}`)
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

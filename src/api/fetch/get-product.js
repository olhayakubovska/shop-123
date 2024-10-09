export const getProduct = async (id) => {
  try {
    const response = await fetch(`http://localhost:3007/products/${id}`);
    if (!response.ok) {
      throw new Error("Ошибка при получении данных");
    }
    const product =await response.json(); // Возвращаем преобразованные данные
    return product;
  } catch (error) {
    console.error("Ошибка:", error);
    throw error
  }
};
// export const getProduct = (id) => {
//   return fetch(`http://localhost:3007/products/${id}`)
//     .then((loadedData) => {
//       if (!loadedData.ok) {
//         throw new Error("Ошибка при получении данных");
//       }
//       return loadedData.json(); // Возвращаем преобразованные данные
//     })
//     .catch((error) => {
//       console.error("Ошибка:", error);
//     });
// };

// export const getSortedProducts = (field, type) => {
//     return fetch(`http://localhost:3007/products?_sort=${field}&_order=${type}`)
//       .then((loadedData) => {
//         if (!loadedData.ok) {
//           throw new Error("Ошибка при получении данных");
//         }
//         return loadedData.json();
//       })
//       .catch((error) => {
//         console.error("Ошибка:", error);
//       });
//   };

export const getSortedProducts = async (field, type) => {
  try {
    const response = await fetch(
      `http://localhost:3007/products?_sort=${field}&_order=${type}`
    );
    if (!response.ok) {
      throw new Error("Ошибка при получении данных");
    }
    const sortedProducts = response.json();
    return sortedProducts;
  } catch (error) {
    console.error("Ошибка:", error);
    throw error;
  }
};

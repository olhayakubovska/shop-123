// export const getProductFromCategory = async (productIds) => {
//     try {
//       // Преобразуем массив ID в строку, разделённую запятыми
//       const idsQuery = productIds.join(',');

//       // Выполняем запрос к серверу с переданными ID
//       const response = await fetch(`http://localhost:3007/products?ids=${idsQuery}`);

//       // Проверяем, успешен ли ответ от сервера
//       if (!response.ok) {
//         throw new Error("Ошибка при получении продуктов");
//       }

//       // Возвращаем данные в формате JSON
//       const productsData = await response.json();
//       return productsData;
//     } catch (error) {
//       console.error("Ошибка:", error);
//       throw error; // Передаем ошибку дальше для обработки
//     }
//   };

// export const getProductFromId = (productId) => {
//     return fetch(
//       `http://localhost:3007/products?id=${productId}`
//     )
//       .then((loadedData) => {
//         if (!loadedData.ok) {
//           throw new Error("Ошибка при получении данных");
//         }
//         return loadedData.json(); // Возвращаем преобразованные данные
//       })
//       .catch((error) => {
//         console.error("Ошибка:", error);
//       });
//   };

export const getProductsFromIds = async (productsIds) => {
  try {
    // Преобразуем массив ID в строку, разделённую запятыми
    // const idsQuery = productIds;
    const productIds = productsIds.map((item) => item.productId);

    // console.log(productIds, "productsData id");

    // const idsQuery = productIds.join(",");

    // Выполняем запрос к серверу с переданными ID
    const response = await fetch(
      `http://localhost:3007/products?id=${productIds}`
    );

    // Проверяем, успешен ли ответ от сервера
    if (!response.ok) {
      throw new Error("Ошибка при получении продуктов");
    }

    // Возвращаем данные в формате JSON
    const productsData = await response.json();
    // console.log(productsData, "productsData finish");
    return productsData; // Вернуть массив продуктов
  } catch (error) {
    console.error("Ошибка:", error);
    throw error; // Передаем ошибку дальше для обработки
  }
};

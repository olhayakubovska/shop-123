// export const getProductsBeforeSearch = (searchPhrase) => {
//   // Проверяем, есть ли поисковая фраза
//   const query = searchPhrase ? `?name_like=${searchPhrase}` : "";

//   return fetch(`http://localhost:3007/products${query}`) // Формируем запрос
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Ошибка при получении данных: " + response.statusText);
//       }
//       return response.json(); // Возвращаем преобразованные данные
//     })
//     .catch((error) => {
//       console.error("Ошибка:", error.message);
//     });
// };

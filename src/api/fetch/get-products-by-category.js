export const getProductsByCategory = async (categoryId) => {
  try {
    const response = await fetch(
      `http://localhost:3007/categoryToProduct?categoryId=${categoryId}`
    );

    if (!response.ok) {
      throw new Error("Ошибка при получении данных");
    }
    const category =await response.json(); // Возвращаем преобразованные данные
    return category;
  } catch (error) {
    console.error("Ошибка:", error);
  }
};

// import { getProductOperation } from "../operations/get-product-operation";

// export const getProductsByCategory = (categoryId) => {
//   return fetch(
//     `http://localhost:3007/categoryToProduct?categoryId=${categoryId}`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Ошибка при получении данных");
//       }
//       return response.json(); // Возвращаем преобразованные данные
//     })
//     // .then((data) => {
//     //   // Предполагаем, что данные содержат список ID продуктов
//     //   const productIds = data.map((item) => item.productId);

//     //   console.log(productIds, "productIds fetch");
//     // // return  getProductOperation(productIds).then((response) => {
//     // //     if (!response.ok) {
//     // //       throw new Error("Ошибка при получении продуктов");
//     // //     }
//     // //     return response.json();
//     // //   });
//     //   // Обратите внимание на исправление здесь
//     //   // return fetch(`http://localhost:3007/products?ids=${productIds.join(',')}`)
//     //   //   .then(response => {
//     //   //     if (!response.ok) {
//     //   //       throw new Error("Ошибка при получении продуктов");
//     //   //     }
//     //   //     return response.json();
//     //   //   });
//     // })
//     .catch((error) => {
//       console.error("Ошибка:", error);
//     });
// };

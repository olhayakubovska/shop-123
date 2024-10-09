export const deleteProduct = async (productId) => {
  return fetch(`http://localhost:3007/products/${productId}`, {
    method: "DELETE",
  });
};
// export const deleteProduct = async (productId) => {
//   try {
//     const response = await fetch(
//       `http://localhost:3007/products/${productId}`,
//       {
//         method: "DELETE",
//       }
//     );

//     if (!response.ok) {
//       throw new Error(`Ошибка при удалении продукта: ${response.statusText}`);
//     }

//     // return response;
//   } catch (error) {
//     console.log("Ошибка на сервере:", error);
//     throw error;
//   }
// };

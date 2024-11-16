// export const getProducts = async (searchPhrase) => {
//   const query = searchPhrase ? `?name_like=${searchPhrase}` : "";
// try{
//   const response = await fetch(`http://localhost:3007/products${query}`) // Формируем запрос
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Ошибка при получении данных: " + response.statusText);
//       }
//     })
//     }
//       const products = await response.json()
//       return products; // Возвращаем преобразованные данные
//     {catch((error) => {
//       console.error("Ошибка:", error.message);
//     })};
// };

// export const getProducts = async (searchPhrase = "") => {
//   const query = searchPhrase ? `?name_like=${searchPhrase}` : "";

//   try {
//     const response = await fetch(`http://localhost:3007/products${query}`);

//     if (!response.ok) {
//       throw new Error("Ошибка при получении данных: " + response.statusText);
//     }

//     const products = await response.json();

//     return products;
//   } catch (error) {
//     console.error("Ошибка:", error.message);
//   }
// };
// Одна функция для получения всех продуктов или продуктов по поисковой фразе
// export const getProducts = async (
//   productId = 0,
//   searchPhrase = "",
//   sort = "desc"
// ) => {
//   const params = new URLSearchParams();
//   if (productId) {
//     params.append("productId", productId);
//   }
//   if (searchPhrase) {
//     params.append("searchPhrase", searchPhrase);
//   }
//   if (sort) {
//     params.append("sort", sort);
//   }

//   try {
//     const response = await fetch(
//       `http://localhost:3007/products${params.toString()}`
//     );

//     if (!response.ok) {
//       throw new Error("Ошибка при получении данных: " + response.statusText);
//     }

//     const products = await response.json();
//     return products;
//   } catch (error) {
//     console.error("Ошибка:", error.message);
//   }
// };

export const getProducts = async (
  productId = 0,
  searchPhrase = "",
  sort = "desc"
) => {
  const params = new URLSearchParams();
  
  if (productId) {
    params.append("productId", productId);
  }
  if (searchPhrase) {
    params.append("searchPhrase", searchPhrase);
  }
  if (sort) {
    params.append("sort", sort);
  }

  // Ensure the query string starts with a "?" if params are added
  const queryString = params.toString() ? `?${params.toString()}` : '';

  try {
    const response = await fetch(`http://localhost:3007/products${queryString}`);

    if (!response.ok) {
      throw new Error("Ошибка при получении данных: " + response.statusText);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Ошибка:", error.message);
  }
};

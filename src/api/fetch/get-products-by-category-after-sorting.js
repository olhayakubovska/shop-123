export const getProductsByCatrgoryAfterSorting = async (
  searchPhrase = "",
  categoryId
) => {
//   const query = searchPhrase ? `?name_like=${searchPhrase}` : "";

  try {
    const response = await fetch(
        `http://localhost:3007/products?name_like=${searchPhrase}&categoryId=${categoryId}`
    //   `http://localhost:3007/products?name_like=${searchPhrase}`
    );

    if (!response.ok) {
      throw new Error("Ошибка при получении данных: " + response.statusText);
    }

    const products = await response.json();
    // console.log(
    //   searchPhrase,
    //   "фраза",
    //   products,
    //   "продукты по категории после поиска"
    // );
    return products;
  } catch (error) {
    console.error("Ошибка:", error.message);
  }
};

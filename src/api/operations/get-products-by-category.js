import { getProductsByCategory } from "../fetch";

export const getProductsFromServerByCategoryOperation = async (categoryId) => {
  const products = await getProductsByCategory(categoryId);
//   console.log(products, "categiries operat");

  return products;
};



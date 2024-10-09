import { getProductsByCategory } from "../fetch";

export const getProductsFromServerByCategoryOperation = async (categoryId) => {
  const products = await getProductsByCategory(categoryId);


  return products;
};

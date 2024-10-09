import { getProducts } from "../fetch";

export const getProductsOperation = async (searchPhrase) => {
  const products = await getProducts(searchPhrase);

  return products;
};

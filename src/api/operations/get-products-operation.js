import { getProducts } from "../fetch/get-products";

export const getProductsOperation = async () => {
  const products = await getProducts();

  return products;
};

import { getProductsBeforeSearch } from "../fetch";

export const getProductsBeforeSearchOperation = async (searchPhrase) => {
  // console.log(searchPhrase, "searchPhrase getProductsBeforeSearchOperation ");
  const products = await getProductsBeforeSearch(searchPhrase);

  // console.log(products, "getProductsBeforeSearchOperation");

  return products;
};

import { deleteProductFromBasket } from "../fetch/delete-product-from-basket";
// import { getUserProductsFromBasket } from "../fetch/get-user-products";

export const removeProductFromBasketOperation = async (productId, userId) => {
  await deleteProductFromBasket(productId);
  // const product = await  getUserProductsFromBasket(userId)
  //  console.log(product, "productBeforeDelete")
  return true;
};

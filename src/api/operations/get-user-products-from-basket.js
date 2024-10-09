import { getUserProductsFromBasket } from "../fetch/get-user-products";

export const getUserProductFromBasketOperation = async (userId) => {
  const userProducts = await getUserProductsFromBasket(userId);
  console.log(userProducts, "userProducts");
  return userProducts;
};

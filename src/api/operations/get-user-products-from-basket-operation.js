import { getUserProductsFromBasket } from "../fetch/get-user-products";

export const getUserProductsFromBasketOperation = async (userId) => {
  const userProducts = await getUserProductsFromBasket(userId);
  // console.log(userProducts, "продукты юзера");
  return userProducts;
};

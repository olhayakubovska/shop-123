import { addProductToBasket } from "../fetch/add-product-to-basket";

export const addProductToBasketOperation = async (userId, productId) => {
  const card = await addProductToBasket(userId, productId);


  return {
    err: null,
    res: card,
  };
};

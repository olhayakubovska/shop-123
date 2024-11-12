import { addProductToBasket } from "../fetch/add-product-to-basket";

export const addProductToBasketOperation = async (userId, productId,productImage,productName,productPrice,productDescription) => {
  const card = await addProductToBasket(userId, productId,productImage,productName,productPrice,productDescription);

// console.log(card,"продукт с корзины")
  return {
    err: null,
    res: card,
  };
};

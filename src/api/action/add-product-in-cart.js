import { ACTION_TYPE } from "./action-type";

export const addProductInCard = (product) => ({
  type: ACTION_TYPE.ADD_PRODUCT_IN_CARD,
  payload: product,
});

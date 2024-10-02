import { ACTION_TYPE } from "./action-type";

export const setProductsActions = (products) => ({
  type: ACTION_TYPE.SET_PRODUCTS,
  payload: products,
});

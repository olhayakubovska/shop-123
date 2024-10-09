import { ACTION_TYPE } from "../api/action";

const initialStateProduct = {
  id: null,
  name: null,
  image: null,
  price: null,
  categoryId: null,
  description: null,
};

export const productReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_PRODUCT_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case ACTION_TYPE.RESET_POST_DATA:
      return initialStateProduct;
    default:
      return state;
  }
};

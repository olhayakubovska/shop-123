import { ACTION_TYPE } from "../api/action";

const initialStateBasket = {
  items: [],
};

export const BasketReducer = (state = initialStateBasket, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_PRODUCT_IN_CARD:
      return {
        ...state,
        items: [...state.items, action.payload], 
      };
    case ACTION_TYPE.REMOVE_PRODUCT_FROM_CARD:
      return {
        ...state,
        items: state.items.filter((item)=> item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

import userEvent from "@testing-library/user-event";
import { ACTION_TYPE } from "../api/action";

const initialStateBasket = {
  baskets: [],
  // items: JSON.parse(localStorage.getItem("basketItems")) || [],
};

export const BasketReducer = (state = initialStateBasket, action) => {
  switch (action.type) {
    // case "INITIALIZE_BASKET":
    //   return {
    //     ...state,
    //     items: action.payload,
    //   };
    // case ACTION_TYPE.ADD_PRODUCT_IN_CARD: {
    //   const { userId, product } = action.payload;
    //   {
    //     const userBasket = state.baskets.find(
    //       (basket) => basket.userId === userId
    //     );
    //     if (userBasket) {
    //       return {
    //         baskets: state.baskets.map((basket) =>
    //           basket.userId === userId
    //             ? {
    //                 ...basket,
    //                 items: [...basket.items, product],
    //               }
    //             : basket
    //         ),
    //       };
    //     } else {
    //       return {
    //         ...state,
    //         baskets: [...state.baskets, { userId, items: [product] }],
    //       };
    //     }

    //   }
    // }
    case ACTION_TYPE.ADD_PRODUCT_IN_CARD: {
      const { userId, product } = action.payload;
console.log(userId,product, 'productReducer')
      // Ищем корзину текущего пользователя
      const userBasket = state.baskets.find(
        (basket) => basket.userId === userId
      );

      if (userBasket) {
        // Если корзина пользователя уже есть, добавляем товар
        return {
          ...state,
          baskets: state.baskets.map((basket) =>
            basket.userId === userId
              ? { ...basket, items: [...basket.items, product] }
              : basket
          ),
        };
      } else {
        // Если корзины пользователя еще нет, создаем новую корзину для пользователя
        return {
          ...state,
          baskets: [...state.baskets, { userId, items: [product] }],
        };
      }
    }

    case ACTION_TYPE.REMOVE_PRODUCT_FROM_CARD:
      const { userId, productId } = action.payload;

      return {
        ...state,
        baskets: state.baskets.map((basket) =>
          basket.userId === userId
            ? {
                ...basket,
                items: basket.items.filter((item) => item.id !== productId),
              }
            : basket
        ),
      };
    //   filter(
    //     (basket) => basket.items.id !== productId
    //   ),
    // };
    // return {
    //   ...state,
    //   items: state.baskets.filter((item) => item.id !== action.payload.id),
    // };
    default:
      return state;
  }
};

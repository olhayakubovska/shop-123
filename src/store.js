import { applyMiddleware, combineReducers, createStore } from "redux";

import { thunk } from "redux-thunk";
import { AppReducer, BasketReducer, productReducer, productsReducer, UserReducer, UserSReducer } from "./reducers";


// const composeEnhangers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_

const reducer = combineReducers({
  app: AppReducer,
  user: UserReducer,
  users: UserSReducer,
  basket: BasketReducer,
  product: productReducer,
  products: productsReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));

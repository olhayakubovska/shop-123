import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  AppReduser,
  UserReducer,
  BasketReducer,
  productReducer,
  productsReducer,
} from "./redusers";
import { thunk } from "redux-thunk";
import { UserSReducer } from "./redusers/users-reducer";

// const composeEnhangers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_

const reducer = combineReducers({
  app: AppReduser,
  user: UserReducer,
  users: UserSReducer,
  basket: BasketReducer,
  product: productReducer,
  products: productsReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));

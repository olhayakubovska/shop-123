import { getProductOperation } from "../operations/get-product-operation";
import { setProductData } from "./set-product-data";

export const loadProductaAsync = (productId) => (dispatch) => {
  return getProductOperation(productId).then((postData) => {
    dispatch(setProductData(postData));

    return postData;
  });
};

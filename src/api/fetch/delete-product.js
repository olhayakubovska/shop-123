export const deleteProduct = (productId) => {
  fetch(`http://localhost:3007/products/${productId}`, {
    method: "DELETE",
  });
};

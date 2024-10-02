export const addProduct = (name, image, price, categoryId, description) => {
  fetch("http://localhost:3007/products", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      name,
      image,
      price,
      categoryId: "001",
      description,
    }),
  });
};

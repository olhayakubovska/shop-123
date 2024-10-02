export const setUpdateProduct = (
  producId,
  editedName,
  editedImage,
  editedPrice,
  editedCategory,
  editedDescription
) =>
  fetch(`http://localhost:3007/products/${producId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      name: editedName,
      image: editedImage,
      price: editedPrice,
      categoryId: editedCategory,
      description: editedDescription,
    }),
  });
//.then((loadedData) => loadedData.json());

export const addProduct = async (
  name,
  image,
  price,
  categoryId,
  description
) => {
  try {
    const productResponse = await fetch("http://localhost:3007/products", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify({
        name,
        image,
        price,
        categoryId,
        description,
      }),
    });

    if (!productResponse.ok) {
      throw new Error("Failed to add product");
    }

    const productData = await productResponse.json();
    const productId = productData.id;
    const productCategoryId = productData.categoryId;

    const categoryResponse = await fetch(
      "http://localhost:3007/categoryToProduct",
      {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        body: JSON.stringify({
          categoryId: productCategoryId,
          productId: productId,
        }),
      }
    );

    if (!categoryResponse.ok) {
      throw new Error("Failed to associate product with category");
    }

    return productData;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
};

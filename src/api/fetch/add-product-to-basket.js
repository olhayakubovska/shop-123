export const addProductToBasket = async (userId, productId) => {
  try {
    const response = await fetch("http://localhost:3007/basket", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify({
        userId: userId,
        productId: productId,
      }),
    });

    if (!response.ok) {
      throw new Error("error!");
    }

    const card = await response.json();
    console.log(card, 'card123')
    return card;
  } catch (error) {
    console.log(error);
  }
};

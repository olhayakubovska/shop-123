export const getUserProductsFromBasket = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3007/basket`); // Запрос на сервер для получения всех элементов корзины

    if (!response.ok) {
      throw new Error("Ошибка при получении корзины");
    }

    const cartItems = await response.json(); // Преобразуем ответ в JSON
    // Фильтруем элементы по userId
    const userCartItems = cartItems.filter((item) => item.userId === userId);
    console.log(cartItems, "cartItems");
    
    return userCartItems; // Возвращаем товары из корзины пользователя
  } catch (error) {
    console.error("Ошибка:", error);
    throw error; // Пробрасываем ошибку выше
  }
};

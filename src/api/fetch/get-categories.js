export const getCategories = async () => {
  try {
    const response = await fetch(`http://localhost:3007/categories`);

    if (!response.ok) {
      throw new Error(`Ошибка при удалении продукта: ${response.statusText}`);
    }
    const categories = await response.json();

    return categories;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

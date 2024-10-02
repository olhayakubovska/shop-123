export const getProducts = () => {
    return fetch(`http://localhost:3007/products`)
      .then((loadedData) => {
        if (!loadedData.ok) {
          throw new Error("Ошибка при получении данных");
        }
        return loadedData.json(); // Возвращаем преобразованные данные
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  };
  
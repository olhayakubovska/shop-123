export const getSortedProducts = (field, type) => {
    return fetch(`http://localhost:3007/products?_sort=${field}&_order=${type}`)
      .then((loadedData) => {
        if (!loadedData.ok) {
          throw new Error("Ошибка при получении данных");
        }
        return loadedData.json();
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  };
  
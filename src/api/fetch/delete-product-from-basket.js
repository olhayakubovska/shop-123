export const deleteProductFromBasket = (productId) =>{
    return fetch(`http://localhost:3007/basket/${productId}`, {
        method: "DELETE",
      }).then(response => {
        if (!response.ok) {
          throw new Error("Ошибка при удалении продукта");
        }
        return response.json();
      })
    };
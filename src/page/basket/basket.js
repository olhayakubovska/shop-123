import { useDispatch, useSelector } from "react-redux";
import styles from "./basket.module.css";
import { removeProductFromCard } from "../../api/action";
import { getUserProductsFromBasketOperation } from "../../api/operations/get-user-products-from-basket-operation";
import { useEffect, useState } from "react";
import { removeProductFromBasketOperation } from "../../api/operations/remove-product-from-bsket-operation";

export const Basket = () => {
  const userId = useSelector(({ user }) => user.id);
  const [userProducts, setUserProducts] = useState([]);
  // console.log(userId,"userId")
  const dispatch = useDispatch();

  // const removeItem = (productId) => {
  //   dispatch(removeProductFromCard(productId));
  //   removeProductFromBasketOperation(productId, userId);

  //   const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  //   const cart = currentCart.filter((item) => Number(item.id) !== Number(productId));
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // };

  const removeItem = (productId, productId2) => {
    // Логируем productId для отладки
    // console.log(" product ID:", productId);

    // Обновление глобального состояния через Redux
    // dispatch(removeProductFromCard(productId));

    // Удаление на сервере или в операции с корзиной
    removeProductFromBasketOperation(productId, userId);

    // // Получаем текущую корзину из localStorage
    // const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    // // Логируем корзину перед фильтрацией
    // console.log("Current cart before filtering:", currentCart);

    // // Фильтруем корзину, удаляя продукт с нужным ID
    // const cart = currentCart.filter((item) => item.id !== productId2);

    // // Логируем корзину после фильтрации
    // console.log("Updated cart after filtering:", cart);

    // // Сохраняем обновлённую корзину в localStorage
    // localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    getUserProductsFromBasketOperation(userId).then(
      (userProductsFromServer) => {
        // console.log(userProducts,"компонент")
        setUserProducts(userProductsFromServer);
      }
    );
    //     const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    //     const  currentCartForUser = currentCart.filter((item)=>item.userId === userId)
    // setUserProducts(currentCartForUser)
  });

  // console.log(userProducts, " для id")
  //   const itemsInBasket = useSelector(({ basket }) => basket.items);
  //  console.log(itemsInBasket, "itemsInBasket");

  return (
    <>
      {" "}
      {userId && (
        <div className={styles.container}>
          {userProducts.map(
            ({
              id,
              productId,
              productImage,
              productName,
              productPrice,
              productDescription,
              // image,
              // name,
              // price,
              // description,
            }) => (
              <div key={id} className={styles.productItem}>
                <img src={productImage} alt={productName} className={styles.productImage} />
                <div className={styles.productInfo}>
                  <div className={styles.productName}>{productName}</div>
                  <div className={styles.productPrice}>Цена: ${productPrice}</div>
                  <div className={styles.productDescription}>{productDescription}</div>
                </div>
                <div className={styles.btnAndId}>
                  <button
                    className={styles.btn}
                    onClick={() => removeItem(id, productId)}
                  >
                    удалить из корзины
                  </button> 
                   {/* <div className={styles.idProduct}></div> */}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};

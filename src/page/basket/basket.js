import { useDispatch, useSelector } from "react-redux";
import styles from "./basket.module.css";
import { removeProductFromCard } from "../../api/action/remove-product-from-cart";

export const Basket = () => {
  const itemsInBasket = useSelector(({ basket }) => basket.items);
  const dispatch = useDispatch();

  const removeItem = (productId) => {
    dispatch(removeProductFromCard(productId));
  };

  return (
    <div className={styles.container}>
      {itemsInBasket.map(({ id, name, image, price, description }) => (
        <div key={id} className={styles.productItem}>
          <img src={image} alt={name} className={styles.productImage} />
          <div className={styles.productInfo}>
            <div className={styles.productName}>{name}</div>
            <div className={styles.productPrice}>Цена: ${price}</div>
            <div className={styles.productDescription}>{description}</div>
          </div>
          <div  className={styles.btnAndId}>
            <button className={styles.btn} onClick={() => removeItem(id)}>
              удалить из корзины
            </button>
            <div className={styles.idProduct}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

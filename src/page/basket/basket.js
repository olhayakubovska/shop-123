import { useDispatch, useSelector } from "react-redux";
import styles from "./basket.module.css";
import { removeProductFromCard } from "../../api/action";
import { getUserProductsFromBasketOperation } from "../../api/operations/get-user-products-from-basket-operation";
import { useEffect, useState } from "react";
import { removeProductFromBasketOperation } from "../../api/operations/remove-product-from-bsket-operation";

export const Basket =  () => {
  
  const userId = useSelector(({user})=>user.id);
  const [userProducts, setUserProducts]= useState([])
  // console.log(userId,"userId")
  const dispatch = useDispatch();
  
  const removeItem = (productId) => {
    dispatch(removeProductFromCard(productId));
    removeProductFromBasketOperation(productId,userId);
    };
    
    useEffect(()=>{
      getUserProductsFromBasketOperation(userId).then((userProductsFromServer)=>{
        // console.log(userProducts,"компонент")
        setUserProducts(userProductsFromServer)
        
        })
        
        })
    //   const itemsInBasket = useSelector(({ basket }) => basket.items);
    //  console.log(itemsInBasket, "itemsInBasket");
        
  return (
    <div className={styles.container}>
      
      {userProducts.map(({ id,
      productImage,
      productName,
      productPrice,
      productDescription}) => (
        <div key={id} className={styles.productItem}>
          <img src={productImage} alt={productName} className={styles.productImage} />
          <div className={styles.productInfo}>
            <div className={styles.productName}>{productName}</div>
            <div className={styles.productPrice}>Цена: ${productPrice}</div>
            <div className={styles.productDescription}>{productDescription}</div>
          </div>
          <div className={styles.btnAndId}>
            <button className={styles.btn} onClick={() => removeItem(id)}>
              удалить из корзины
            </button>
            {/* <div className={styles.idProduct}></div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

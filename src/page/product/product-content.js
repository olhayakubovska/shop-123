// import { Link, useNavigate } from "react-router-dom";
// import styles from "./product.module.css";
// import { useDispatch } from "react-redux";
// import { addProductInCard } from "../../api/action";

// export const ProductContent = ({ product, id }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const addToCart = () => {
//     dispatch(addProductInCard(product));
//     navigate("/basket");
//   };
//   return (
//     <div className={styles.product}>
//       <div className={styles.productImg}>
//         <img src={product.image} alt={product.name} />
//       </div>
//       <div className={styles.info}>
//         <div className={styles.productName}>{product.name}</div>
//         <div className={styles.price}>Цена: ${product.price}</div>
//         <div className={styles.categoryId}>Количество: 10</div>
//         <div className={styles.description}>
//           Описание: {product.description}
//         </div>
//       </div>
//       <div className={styles.btnAndId}>
//         <button className={styles.btn} onClick={addToCart}>
//           добавить в корзину
//         </button>
//         <div className={styles.idProduct}> {id}</div>
//       </div>
//       <Link to={`/product/edit`}>
//         <div className={styles.edit}>
//           <i className="fa fa-pencil" aria-hidden="true"></i>
//         </div>
//       </Link>
//     </div>
//   );
// };

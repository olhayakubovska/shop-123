import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./product.module.css";
import { getProductOperation } from "../../api/operations";
import { addProductInBasket } from "../../api/action";
import { Search } from "../../components";
import { ProductsCards } from "../products-cards/poducts-cards";
import { addProductToBasketOperation } from "../../api/operations/add-product-to-card-operation";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [productsBeforeSearch, setProductsBeforeSearch] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  const userId = useSelector(({ user }) => user.id);
  // console.log(userId,"userId")
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    getProductOperation(id).then((loadedProduct) => {
      setProduct(loadedProduct);
    });

    // getProductsBeforeSearchOperation(searchPhrase).then((fetchedProducts) =>
    //   setProductsBeforeSearch(fetchedProducts)
    // );
  }, [id, searchPhrase]);

  const addToCart = (userId2, id2) => {
    addProductToBasketOperation(userId2, id2);
    //userId, productId

    dispatch(addProductInBasket({userId2, ...product}));
    // navigate("/basket");
  };

  return (
    <>
      <Search setSearchPhrase={setSearchPhrase} searchPhrase={searchPhrase} />

      {searchPhrase ? (
        <div className={styles.products}>
          {productsBeforeSearch.map(
            ({ id, name, image, price, categoryId, description }) => (
              <ProductsCards
                key={id}
                id={id}
                name={name}
                image={image}
                price={price}
                categoryId={categoryId}
                description={description}
              />
            )
          )}
        </div>
      ) : (
        <div className={styles.product}>
          <div className={styles.productImg}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={styles.info}>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.price}>Цена: ${product.price}</div>
            <div className={styles.categoryId}>Количество: 10</div>
            <div className={styles.description}>
              Описание: {product.description}
            </div>
          </div>
          <div className={styles.btnAndId}>
            <button className={styles.btn} onClick={()=>addToCart(userId, id)}>
              добавить в корзину
            </button>
            <div className={styles.idProduct}> {id}</div>
          </div>
          {/* <Link to={`/product/edit`}>
      <div className={styles.edit}>
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </div>
    </Link> */}
        </div>
      )}
    </>
  );
};
// return (
//   <>
//     {/* <div>
//       {isEditing ? (
//         <>
//           <ProductForm products={products} />
//         </>
//       ) : (
//         <ProductContent product={product} id={id} />
//       )}

//     </div> */}
//     <ProductContent product={product} id={id} />
//   </>
// );
// <Search setSearchPhrase={setSearchPhrase} searchPhrase={searchPhrase} />

//   {searchPhrase ? (
//     <div className={styles.products}>
//       {productsBeforeSearch.map(
//         ({ id, name, image, price, categoryId, description }) => (
//           <ProductsCards
//             key={id}
//             id={id}
//             name={name}
//             image={image}
//             price={price}
//             categoryId={categoryId}
//             description={description}
//           />
//         )
//       )}
//     </div>
//   ) : (

//   )}

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./product.module.css";

import { getProductOperation } from "../../api/operations/get-product-operation";

import { addProductInCard } from "../../api/action";

import { useDispatch } from "react-redux";
import { setProductsActions } from "../../api/action/set-products-action";
import { getProductsBeforeSearchOperation } from "../../api/operations";
import { Search } from "../../components";
import { ProductsCards } from "../products-cards/poducts-cards";

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [productsBeforeSearch, setProductsBeforeSearch] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    getProductOperation(id).then((loadedProduct) => {
      setProduct(loadedProduct);
    });

    getProductsBeforeSearchOperation(searchPhrase).then((fetchedProducts) =>
      setProductsBeforeSearch(fetchedProducts)
    );
  }, [id, searchPhrase]);

  const addToCart = () => {
    dispatch(addProductInCard(product));
    navigate("/basket");
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
            <button className={styles.btn} onClick={addToCart}>
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

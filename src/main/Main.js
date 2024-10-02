import { useEffect, useState } from "react";
import {
  getCategoriesOperation,
  getProductsBeforeSearchOperation,
  getProductsFromServerByCategoryOperation,
} from "../api/operations";
import { getSortedProducts } from "../api/fetch";

import styles from "./main.module.css";
import { Categories } from "../components/Categiries";
import { ProductsCards } from "../page/products-cards/poducts-cards";
import { Search } from "../components";
import { getProductsOperation } from "../api/operations/get-products-operation";
import { useDispatch } from "react-redux";
import { setProductsActions } from "../api/action/set-products-action";

export const Main = () => {
  const [categiries, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [searchPhrase, setSearchPhrase] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getCategoriesOperation().then((fetchedCategories) => {
      setCategories(fetchedCategories);
    });

    getProductsBeforeSearchOperation(searchPhrase).then((fetchedProducts) => {
      setProducts(fetchedProducts);
    });
  }, [searchPhrase]);

  const chooseCategory = (categoryId) => {
    getProductsFromServerByCategoryOperation(categoryId).then((loadedProducts) => {
      setProducts(loadedProducts);
    });
  };

  useEffect(() => {
    getProductsOperation().then((loadedProducts) => {
      setProducts(loadedProducts);
      dispatch(setProductsActions(loadedProducts));
    });
  }, [dispatch]);

  const onPriceSort = (type) => {
    getSortedProducts("price", type).then((loadedProducts) => {
      setProducts(loadedProducts);
    });
  };

  // const productFromRedax = useSelector(({products})=>products)
  // console.log(productFromRedax, 'productFromRedax');

  return (
    <div className={styles.main}>
      <Search setSearchPhrase={setSearchPhrase} searchPhrase={searchPhrase} />
      {/* <div className={styles.searchSection}>
        <div className={styles.search}>
          <input
            className={styles.searchInput}
            placeholder="Search..."
            value={searchPhrase}
            onChange={({ target }) => setSearchPhrase(target.value)}
          />
          <div className={styles.searchIcon}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
      </div> */}

      <div className={styles.mainSection}>
        <div className={styles.categories}>
          <h2>Категории:</h2>
          <div className={styles.categoryItems}>
            {categiries.map(({ id, category }) => (
              <Categories
                category={category}
                key={id}
                onClick={() => chooseCategory(id)}
              />
            ))}
          </div>
        </div>
        <div className={styles.productsSection}>
          <div className={styles.sorting}>
            <select onChange={({ target }) => onPriceSort(target.value)}>
              <option value="desc">Самое дорогое</option>
              <option value="asc">Самое дешевое</option>
            </select>
          </div>
          <div className={styles.products}>
            {products.map(
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
        </div>
      </div>
    </div>
  );
};

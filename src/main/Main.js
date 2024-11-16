// import { useEffect, useState } from "react";
// import {
//   getCategoriesOperation,
//   getProductsBeforeSearchOperation,
//   getProductsFromServerByCategoryOperation,
// } from "../api/operations";
// import { getSortedProducts } from "../api/fetch";

// import styles from "./main.module.css";
// import { Categories } from "../components/Categiries";
// import { ProductsCards } from "../page/products-cards/poducts-cards";
// import { Search } from "../components";
// import { getProductsOperation } from "../api/operations/get-products-operation";
// import { useDispatch, useSelector } from "react-redux";
// import { setProductsActions } from "../api/action/set-products-action";

// export const Main = () => {
//   const [categiries, setCategories] = useState([]);
//   const [productsBeforeSearch, setProductsBeforeSearch] = useState([]);
//   const [filteredProductsByCategory, setfilteredProductsByCategory] = useState(
//     []
//   );

//   const [searchPhrase, setSearchPhrase] = useState("");

//   const productFromRedax = useSelector(({products})=>products.products)
//   console.log(productFromRedax, 'productFromRedax');

//   const dispatch = useDispatch();

//   useEffect(() => {
//     getProductsOperation().then((loadedProducts) => {
//       dispatch(setProductsActions(loadedProducts));
//       // setProducts(loadedProducts);
//     });
//   }, [dispatch]);

//   useEffect(() => {
//     getCategoriesOperation().then((fetchedCategories) => {
//       setCategories(fetchedCategories);
//     });

//     getProductsBeforeSearchOperation(searchPhrase).then((fetchedProducts) => {
//       setProductsBeforeSearch(fetchedProducts);
//     });
//   }, [searchPhrase]);

//   const chooseCategory = (categoryId) => {
//     getProductsFromServerByCategoryOperation(categoryId).then(
//       (loadedProducts) => {
//         // Предполагаем, что loadedProducts — это массив с объектами, которые содержат поле productId
//         const productIds = loadedProducts.map((p) => p.productId); // Получаем все productId из loadedProducts
//         console.log(productIds, "productIds2345");
//         // Теперь фильтруем массив products, чтобы вернуть все продукты, которые содержат productId из массива productIds
//         const filteredProducts = productFromRedax.filter((p) =>
//           productIds.includes(p.id)
//         );

//         console.log(productFromRedax, "products"); // Выводим отфильтрованные продукты для проверки
//         console.log(filteredProducts, "filtered products123"); // Выводим отфильтрованные продукты для проверки

//         // Обновляем состояние с отфильтрованными продуктами
//         setfilteredProductsByCategory(filteredProducts);
//       }
//     );
//   };

//   const onPriceSort = (type) => {
//     getSortedProducts("price", type).then((loadedProducts) => {
//       setProductsBeforeSearch(loadedProducts);
//     });
//   };

//   return (
//     <div className={styles.main}>
//       <Search setSearchPhrase={setSearchPhrase} searchPhrase={searchPhrase} />

//       <div className={styles.mainSection}>
//         <div className={styles.categories}>
//           <h2>Категории:</h2>
//           {/*
//             TODO(olhayakubovska): Categories are not versatile right now. Let's
//             add many-to-many relations for categories.

//             "products": [
//               {
//                 "id": "p005",
//                 "name": "Кроссовки Nike",
//               },
//               {
//                 "id": "p006",
//                 "name": "Ботинки Timberland",
//               },
//             ]

//             "categories": [
//               {
//                 "id": "001",
//                 "category": "Обувь"
//               },
//               {
//                 "id": "002",
//                 "category": "Зимняя одежда"
//               }
//             ]

//             "categoryToProduct": [
//               {
//                 "productId": "p005",
//                 "categoryId": "001"
//               },
//               {
//                 "productId": "p006",
//                 "categoryId": "001"
//               },
//               {
//                 "productId": "p006",
//                 "categoryId": "002"
//               }
//             ]

//             This way, "Ботинки Timberland" are in 2 categories at the same time,
//             "Обувь" and "Зимняя одежда".
//           */}
//           {/*
//             TODO(olhayakubovska): Let's add category, which will show all
//             products without filtering.
//           */}
//           <div className={styles.categoryItems}>
//             {categiries.map(({ id, category }) => (
//               <Categories
//                 category={category}
//                 key={id}
//                 onClick={() => chooseCategory(id)}
//               />
//             ))}
//           </div>
//         </div>
//         <div className={styles.productsSection}>
//           <div className={styles.sorting}>
//             <select onChange={({ target }) => onPriceSort(target.value)}>
//               {/*
//                 TODO(olhayakubovska): Sorting does not work correctly here:
//                 https://images2.imgbox.com/4c/41/XSaPoIBb_o.png
//               */}
//               <option value="desc">Самое дорогое</option>
//               {/*
//                 TODO(olhayakubovska): Sorting does not work correctly here:
//                 https://images2.imgbox.com/1e/00/6wzmkYq2_o.png
//               */}
//               <option value="asc">Самое дешевое</option>
//             </select>
//           </div>
//           <div className={styles.products}>
//             {filteredProductsByCategory
//               ? filteredProductsByCategory.map(
//                   ({ id, name, image, price, categoryId, description }) => (
//                     <ProductsCards
//                       key={id}
//                       id={id}
//                       name={name}
//                       image={image}
//                       price={price}
//                       categoryId={categoryId}
//                       description={description}
//                     />
//                   )
//                 )
//               : productFromRedax.map(
//                   ({ id, name, image, price, categoryId, description }) => (
//                     <ProductsCards
//                       key={id}
//                       id={id}
//                       name={name}
//                       image={image}
//                       price={price}
//                       categoryId={categoryId}
//                       description={description}
//                     />
//                   )
//                 )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useEffect, useState } from "react";

import styles from "./main.module.css";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import {
  getCategoriesOperation,
  getProductsFromServerByCategoryOperation,
  getProductsOperation,
} from "../api/operations";
import { setProductsAction } from "../api/action";
import { getSortedProducts } from "../api/fetch";
import { Categories, Search } from "../components";
import { ProductsCards } from "../page";
import { getProductsByCatrgoryAfterSorting } from "../api/fetch/get-products-by-category-after-sorting";
// import { getProductsByCategoryAfterSorting } from "../api/operations/get-products-by-category-after-sorting-operation";

export const Main = () => {
  const [categories, setCategories] = useState([]);
  // const [productsBeforeSearch, setProductsBeforeSearch] = useState([]);
  // const [productsBeforeSearchByCategoryId, setProductsBeforeSearchByCategoryId] = useState([]);
  // const [productsByCategory, setFilteredProductsByCategory] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [selectedCategoryId, setSelectCategoryId] = useState("");
  const [selectedSort, setSelectSort] = useState("desc");
  const productsFromRedax = useSelector(({ products }) => products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    getCategoriesOperation().then((fetchedCategories) => {
      setCategories(fetchedCategories);
    });

    getProductsOperation().then((loadedProducts) => {
      dispatch(setProductsAction(loadedProducts));
    });
    // getProductsBeforeSearchOperation(searchPhrase).then((fetchedProducts) => {
    //   setProductsBeforeSearch(fetchedProducts);
    // });
  }, []);



  // Функция для выбора категории
  const chooseCategory = (categoryId) => {
    setSelectCategoryId(categoryId);
  };

  const onSort = (type) => {
    setSelectSort(type)
  };

  const productsToDisplay = () => {
    let products = productsFromRedax
    
    products = products.filter((product) => {
      return selectedCategoryId ? product.categoryId === selectedCategoryId : true;
    })
    
    products = products.filter((product) => {
      return searchPhrase ? product.name.toLowerCase().includes(searchPhrase.toLowerCase()) : true;
    })
    
    products = products.sort((a, b) => {
      if (selectedSort === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    return products;


    // if (searchPhrase) {
    //   if (selectCategoryId) {
    //     if (selectType) {
    //       return filteredByPhrasefilteredByCategorySortedByType;
    //     } else {
    //       return filteredByPhrasefilteredByCategoryUnsortedByType;
    //     }
    //   } else {
    //     if (selectType) {
    //       return filteredByPhraseUnfilteredByCategorySortedByType;
    //     } else {
    //       return filteredByPhraseUnfilteredByCategoryUnsortedByType;
    //     }
    //   }
    // } else {
    //   if (selectCategoryId) {
    //     if (selectType) {
    //       return unfilteredByPhrasefilteredByCategorySortedByType;
    //     } else {
    //       return unfilteredByPhrasefilteredByCategoryUnsortedByType;
    //     }
    //   } else {
    //     if (selectType) {
    //       return unfilteredByPhraseUnfilteredByCategorySortedByType;
    //     } else {
    //       return filteredByPhraseUnfilteredByCategoryUnsortedByType;
    //     }
    //   }
    // }
  }

  return (
    <div className={styles.main}>
      <Search setSearchPhrase={setSearchPhrase} searchPhrase={searchPhrase} />

      <div className={styles.mainSection}>
        <div className={styles.categories}>
          <h2>Категории:</h2>
          <div className={styles.categoryItems}>
            {categories.map(({ id, category }) => (
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
            <select onChange={({ target }) => onSort(target.value)}>
              <option value="desc">Самое дорогое</option>
              <option value="asc">Самое дешевое</option>
            </select>
          </div>

          <div className={styles.products}>
            {productsToDisplay().map(
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
          {/* <div>
            {selectedSort}
          </div>
          <div>
            {selectedCategoryId}
          </div>
          <div>
            {searchPhrase}
          </div> */}
        </div>
      </div>
    </div>
  );
};

// export const Main = () => {
//   const [categiries, setCategories] = useState([]);
//   const [productsBeforeSearch, setProductsBeforeSearch] = useState([]);
//   const [
//     productsBeforeSearchByCategoryId,
//     setProductsBeforeSearchByCategoryId,
//   ] = useState([]);

//   const [filteredProductsByCategory, setfilteredProductsByCategory] = useState(
//     []
//   );

//   const [searchPhrase, setSearchPhrase] = useState("");

//   const productFromRedax = useSelector(({ products }) => products.products);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     getProductsOperation().then((loadedProducts) => {
//       dispatch(setProductsAction(loadedProducts));
//     });
//     getProductsOperation(searchPhrase).then((fetchedProducts) => {
//       setProductsBeforeSearch(fetchedProducts);
//     });
//   }, [dispatch, searchPhrase]);

//   useEffect(() => {
//     getCategoriesOperation().then((fetchedCategories) => {
//       setCategories(fetchedCategories);
//     });
//   }, []);

//   const [selectCategoryId, setSelectCategoryId] = useState("");

//   const chooseCategory = (categoryId) => {
//     // setSelectCategoryId(categoryId);
//     // getProductsFromServerByCategoryOperation(categoryId).then(
//     //   (loadedProducts) => {
//     //     const productIds = loadedProducts.map((p) => p.productId);
//     //     const filteredProducts = productFromRedax.filter((p) =>
//     //       productIds.includes(p.id)
//     //     );

//     //     setfilteredProductsByCategory(filteredProducts);
//     //   }
//     // );
//     setSelectCategoryId(categoryId);
//     if (searchPhrase) {
//       getProductsByCatrgoryAfterSorting(searchPhrase, categoryId).then(
//         (loadedProducts) => {
//           setProductsBeforeSearchByCategoryId(loadedProducts);
//           console.log(
//             productsBeforeSearchByCategoryId,categoryId,
//             "продукты по категории после сортировки"
//           );

//         }
//       );
//     } else {
//       getProductsFromServerByCategoryOperation(categoryId).then(
//         (loadedProducts) => {
//           const productIds = loadedProducts.map((p) => p.productId);
//           const filteredProducts = productFromRedax.filter((p) =>
//             productIds.includes(p.id)
//           );

//           setfilteredProductsByCategory(filteredProducts);
//         }
//       );
//     }
//   };

//   const [selestProductByPrice, setSelectProductByPrice] = useState([]);
//   const [selectType, setSelectType] = useState("");

//   const onPriceSort = (type) => {
//     setSelectType(type);
//     getSortedProducts("price", type).then((loadedProducts) => {
//       setSelectProductByPrice(loadedProducts);
//     });
//   };

//   const productsToDisplay = () => {
//     if (searchPhrase) {
//       return productsBeforeSearch;
//     } else if (selectCategoryId) {
//       return filteredProductsByCategory;
//     } else if (selectType) {
//       return selestProductByPrice;
//     } else {
//       return productFromRedax;
//     }
//   };

//   return (
//     <div className={styles.main}>
//       <Search setSearchPhrase={setSearchPhrase} searchPhrase={searchPhrase} />

//       <div className={styles.mainSection}>
//         <div className={styles.categories}>
//           <h2>Категории:</h2>

//           <div className={styles.categoryItems}>
//             {categiries.map(({ id, category }) => (
//               <Categories
//                 category={category}
//                 key={id}
//                 onClick={() => chooseCategory(id)}
//               />
//             ))}
//           </div>
//         </div>
//         <div className={styles.productsSection}>
//           <div className={styles.sorting}>
//             <select onChange={({ target }) => onPriceSort(target.value)}>
//               <option value="desc">Самое дорогое</option>

//               <option value="asc">Самое дешевое</option>
//             </select>
//           </div>
//           <div className={styles.products}>
//             {productsToDisplay().map(
//               ({ id, name, image, price, categoryId, description }) => (
//                 <ProductsCards
//                   key={id}
//                   id={id}
//                   name={name}
//                   image={image}
//                   price={price}
//                   categoryId={categoryId}
//                   description={description}
//                 />
//               )
//             )}
//             {/* {productsBeforeSearch.map(
//               ({ id, name, image, price, categoryId, description }) => (
//                 <ProductsCards
//                   key={id}
//                   id={id}
//                   name={name}
//                   image={image}
//                   price={price}
//                   categoryId={categoryId}
//                   description={description}
//                 />
//               )
//             )}

//             {filteredProductsByCategory.map(
//               ({ id, name, image, price, categoryId, description }) => (
//                 <ProductsCards
//                   key={id}
//                   id={id}
//                   name={name}
//                   image={image}
//                   price={price}
//                   categoryId={categoryId}
//                   description={description}
//                 />
//               )
//             )} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

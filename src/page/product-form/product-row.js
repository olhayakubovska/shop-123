import { useEffect, useState } from "react";
import { getCategoriesOperation } from "../../api/operations";
import styles from "./productRow.module.css";
import { updateProductOperation } from "../../api/operations/update-product-operation";

export const ProductRow = ({
  id,
  name,
  image,
  price,
  categoryId,
  description,
  editProduct,
  deleteProduct,
}) => {
  // const [selectCategory, setSelectCategory] = useState(categoryId);
  // const [categories, setCategories] = useState([]);
  // const [newNameProdut, setNewNameProduct] = useState(name);
  // const [newPriceProduct, setNewPriceProduct] = useState(price);
  // const [newNameProdut, setNewNameProduct] = useState(name);

  // useEffect(() => {
  //   categoriesOperation().then((loadedCategories) =>
  //     setCategories(loadedCategories)
  //   );
  // }, []);

  // const onCategoryChange = ({ target }) => {
  //   setSelectCategory(target.value);
  // };
  // const updateProduct = (id, newNameProdut2) => {
  //   console.log(id, newNameProdut2);
  //   updateProductOperation(id, newNameProdut2);
  // };

  return (
    <div>
      <div className={styles.tableRow}>
        <input className={styles.nameColumn} value={name} onChange={() => {}} />
        <input
          className={styles.priceColumn}
          value={image}
          onChange={() => {}}
        />

        <input
          className={styles.priceColumn}
          value={price}
          onChange={() => {}}
        />

        <input
          className={styles.priceColumn}
          value={categoryId}
          onChange={() => {}}
        />
        {/* <select value={selectCategory} onChange={onCategoryChange}>
            {categories.map(({ id: categoryId, category }) => (
              <option key={categoryId} value={categoryId}>
                {category}
              </option>
            ))}
          </select> */}

        <input
          className={styles.priceColumn}
          value={description}
          onChange={() => {}}
        />

        <button className={styles.btn} onClick={editProduct}>
          edit
        </button>
        <button className={styles.btn} onClick={deleteProduct}>
          delete
        </button>
      </div>
    </div>
  );
};

// // updateProductOperation(id, newNameProdut, newPriceProduct, selectCategory);
// console.log(id, newNameProdut, newPriceProduct, selectCategory, 'clickUpdate');

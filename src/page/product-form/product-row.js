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
  isSaveButtonDisabled
}) => {
  return (
    <div key={id}>
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
        <button
          className={styles.btn}
          onClick={editProduct}
          disabled={isSaveButtonDisabled}
        >
          edit
        </button>
        {/* 
        <div className={styles.edit} onClick={editProduct}>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </div> */}

        <button className={styles.btn} onClick={deleteProduct}>
          delete
        </button>
      </div>
    </div>
  );
};

// // updateProductOperation(id, newNameProdut, newPriceProduct, selectCategory);
// console.log(id, newNameProdut, newPriceProduct, selectCategory, 'clickUpdate');

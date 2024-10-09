
import styles from "./productRow.module.css";

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

        {/*
          TODO(olhayakubovska): You can use type="number" for numeric values:
          https://www.w3schools.com/tags/att_input_type_number.asp

          Price is a numeric value.
        */}
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

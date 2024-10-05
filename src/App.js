import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Authorization } from "./page/autorization/autorization";
import { Registration } from "./page/registration/registration";
import { Main } from "./main/Main";
import { Basket } from "./page/basket/basket";
import { ProductForm } from "./page/product-form/product-form";
import { Product } from "./page";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./api/action";
import { Users } from "./page/users/users";
import { Modal } from "./components/Modal/Modal";

function App() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const currentuserDataJSON = sessionStorage.getItem("userData");
    if (!currentuserDataJSON) {
      return;
    }

    const currentuserData = JSON.parse(currentuserDataJSON);

    dispatch(
      setUser({ ...currentuserData, roleId: Number(currentuserData.roleId) }) // Восстановление состояния в Redux store
    );
  }, [dispatch]);

  return (
    <div className={styles.appColum}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/edit" element={<ProductForm />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<div className={styles.error}>Такая странрица не сущевствует </div>} />
      </Routes>
      <Modal />
    </div>
  );
}

export default App;

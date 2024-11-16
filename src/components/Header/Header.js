// import { useDispatch, useSelector } from "react-redux";

// import HeaderLogo from "../../image/free-icon-cymric-cat-15370486.png";
// import LoginIcon from "../../image/free-icon-bombay-15370478.png";
// import styles from "./header.module.css";
// import { logout } from "../../api/action";
// import { Link } from "react-router-dom";
// import { ROLE } from "../../constants";
// import { useEffect } from "react";

// export const Header = () => {
//   const userLogin = useSelector(({ user }) => user.login);
//   // const itemsFromBasket = useSelector(({ basket }) => basket.items);
//   const userId = useSelector(({ user }) => user.id);
//   const itemsFromBasket = useSelector(({ basket }) => basket.baskets);
//   const userBasket = itemsFromBasket.find((basket) => basket.userId === userId);
//   const lengthItems = userBasket ? userBasket.items.length : 0;

//   // console.log(userBasket, "userBasket");
//   // console.log(lengthItems,"lengthItems");

//   const userSession = useSelector(({ user }) => user.session);

//   const dispatch = useDispatch();

//   const onLogout = () => {
//     dispatch(logout(userSession));

//     sessionStorage.removeItem("userData");
//   };

//   const userRole = useSelector(({ user }) => user.roleId);
//   return (
//     <div className={styles.headerContainer}>
//       <div className={styles.icon}>
//         <Link to="/">
//           <img src={HeaderLogo} alt="Header logo" className={styles.logo} />
//         </Link>
//         <h1>SHOP</h1>
//       </div>

//       {userRole === ROLE.GUEST ? (
//         <Link className={styles.loginBtn} to="/login">
//           войти
//         </Link>
//       ) : (
//         <>
//           <div className={styles.icon}>
//             <img
//               src={LoginIcon}
//               alt="Login icon"
//               className={styles.loginIcon}
//             />
//             <span className={styles.loginText}>{userLogin}</span>
//             {/*
//               TODO(olhayakubovska): fa-sign-in is not icon correct for logout,
//               please use fa-sign-out instead.
//             */}
//             <i
//               className="fa fa-sign-in"
//               aria-hidden="true"
//               onClick={onLogout}
//             ></i>
//           </div>
//         </>
//       )}

//       <div className={styles.controlPanel}>
//         {userRole === ROLE.ADMIN ? (
//           <>
//             <Link to="/users">
//               <div className={styles.users}>
//                 <i className="fa fa-users" aria-hidden="true" />
//               </div>
//             </Link>
//             <Link to={`/product/edit`}>
//               <div className={styles.edit}>
//                 <i className="fa fa-pencil" aria-hidden="true"></i>
//               </div>
//             </Link>
//             <Link to="/basket">
//               <div className={styles.basket}>
//                 <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//                 <div className={styles.lenghtItems}>{lengthItems}</div>
//               </div>
//             </Link>
//           </>
//         ) : (
//           <Link to="/basket">
//             <div className={styles.basket}>
//               <i className="fa fa-shopping-bag" aria-hidden="true"></i>
//               <div className={styles.lenghtItems}>{lengthItems}</div>
//             </div>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HeaderLogo from "../../image/free-icon-cymric-cat-15370486.png";
import LoginIcon from "../../image/free-icon-bombay-15370478.png";
import styles from "./header.module.css";
import { logout } from "../../api/action";
import { Link } from "react-router-dom";
import { ROLE } from "../../constants";
import { getProductOperation } from "../../api/operations";
import { getUserProductsFromBasketOperation } from "../../api/operations/get-user-products-from-basket-operation";

export const Header = () => {
  const userLogin = useSelector(({ user }) => user.login);
  const userIdSelector = useSelector(({ user }) => user.id);
  const userSession = useSelector(({ user }) => user.session);
  const userRole = useSelector(({ user }) => user.roleId);

  const dispatch = useDispatch();

  const [userProducts, setUserProducts] = useState([]);
  // const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  // // let a = currentCart.filter((item) => item.userId === userIdSelector);
  // let cartLength = currentCart.length;
  // console.log(cartLength, "cartLength");
  getUserProductsFromBasketOperation(userIdSelector).then(
    (userProductsFromServer) => {
      // console.log(userProducts,"компонент")
      setUserProducts(userProductsFromServer);
    }
  );
  const cartLength = userProducts.length;

  const onLogout = () => {
    dispatch(logout(userSession));
    sessionStorage.removeItem("userData");
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.icon}>
        <Link to="/">
          <img src={HeaderLogo} alt="Header logo" className={styles.logo} />
        </Link>
        <h1>SHOP</h1>
      </div>

      {userRole === ROLE.GUEST ? (
        <Link className={styles.loginBtn} to="/login">
          войти
        </Link>
      ) : (
        <>
          <div className={styles.icon}>
            <img
              src={LoginIcon}
              alt="Login icon"
              className={styles.loginIcon}
            />
            <span className={styles.loginText}>{userLogin}</span>
            <i
              className="fa fa-sign-in"
              aria-hidden="true"
              onClick={onLogout}
            ></i>
          </div>
        </>
      )}

      <div className={styles.controlPanel}>
        {userRole === ROLE.ADMIN ? (
          <>
            <Link to="/users">
              <div className={styles.users}>
                <i className="fa fa-users" aria-hidden="true" />
              </div>
            </Link>
            <Link to={`/product/edit`}>
              <div className={styles.edit}>
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </div>
            </Link>
            <Link to="/basket">
              <div className={styles.basket}>
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <div className={styles.lenghtItems}>{cartLength}</div>
              </div>
            </Link>
          </>
        ) : (
          userRole !== ROLE.GUEST && (
            <Link to="/basket">
              <div className={styles.basket}>
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                <div className={styles.lenghtItems}>{cartLength}</div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

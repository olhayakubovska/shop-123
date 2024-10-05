import HeaderLogo from "../../image/free-icon-cymric-cat-15370486.png";
import LoginIcon from "../../image/free-icon-bombay-15370478.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./header.module.css";
import { ROLE } from "../../constants/role";
import { logout } from "../../api/action/logout";

export const Header = () => {
  const userLogin = useSelector(({ user }) => user.login);
  const itemsFromBasket = useSelector(({ basket }) => basket.items);
  const userSession = useSelector(({ user }) => user.session);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout(userSession));

    sessionStorage.removeItem("userData");
  };

  const userRole = useSelector(({ user }) => user.roleId);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.icon}>
        <Link to="/">
          <img src={HeaderLogo} alt="Header logo" className={styles.logo} />{" "}
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
                <div className={styles.lenghtItems}>
                  {itemsFromBasket.length}
                </div>
              </div>
            </Link>
          </>
        ) : (
          <Link to="/basket">
            <div className={styles.basket}>
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              <div className={styles.lenghtItems}>{itemsFromBasket.length}</div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

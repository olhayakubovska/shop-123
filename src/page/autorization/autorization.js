// import { Link, Navigate } from "react-router-dom";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import { autorizationOperation } from "../../api/autorization-operation";
// import { useDispatch, useSelector } from "react-redux";
// import { setUser } from "../../api/action";
// import { useState } from "react";

// const authScheme = yup.object().shape({
//   login: yup
//     .string()
//     .min(3, "Неверная длина логина")
//     .max(10, "Неверная длина пароля")

//     .required("Поле логин обязательно для заполнения"),

//   password: yup
//     .string()
//     .min(4, "Неверная длина пароля")
//     .max(10, "Неверная длина пароля")

//     .required("Поле пароль обязательно для заполнения"),
// });

// const AutorizationContainer = ({ className }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       login: "",
//       password: "",
//     },
//     resolver: yupResolver(authScheme),
//   });

//   const dispatch = useDispatch();
//   const roleId = useSelector(({ user }) => user.roleId);
//   const [serverError, setServerError] = useState("");

//   const formError = errors?.login?.message || errors?.password?.message;
//   const fullError = serverError || formError;

//   const onSubmit = ({ login, password }) => {
//     autorizationOperation(login, password).then(({ error, res }) => {
//       if (error) {
//         setServerError(`Ошибка запроса:' ${error}`);
//         return;
//       }

//       dispatch(setUser(res));

//       // sessionStorage.setItem("userData", JSON.stringify(res));
//     });
//   };

//   if (roleId === 2) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className={className}>
//       <h2>АВТОРИЗАЦИЯ</h2>
//       <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <div>Логин:</div>
//           <input id="login" type="text" {...register("login")} />
//         </div>
//         <div>
//           <div>Пароль:</div>
//           <input id="password" type="password" {...register("password")} />
//         </div>
//         <button className="btn" type="submit">
//           Войти
//         </button>
//         <div className="error">{fullError}</div>

//         <Link className="register-link" to="/register">
//           Зарегистрироваться
//         </Link>
//       </form>
//     </div>
//   );
// };

// export const Authorization = styled(AutorizationContainer)`
//   display: flex;
//   justify-content: center;
//   margin-top: 100px;
//   flex-direction: column;
//   // top: 100px;
//   align-items: center;

//   & h2 {
//     color: #e0d3bc;
//   }

//   & .error {
//     color: red;
//   }

//   & .form-style {
//     background-color: #363639;

//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     max-width: 400px; /* Ширина формы */
//     border-radius: 8px; /* Скругление углов */
//     padding: 20px; /* Отступы внутри формы */
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Тень для формы */
//   }

//   & input {
//     width: 375px;
//     height: 40px;
//     margin: 10px 0;
//     padding: 0 10px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     font-size: 16px;
//   }

//   & .btn {
//     width: 100%;
//     height: 40px;
//     margin-top: 10px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 21px;
//     border-radius: 4px;
//   }

//   & .register-link {
//     font-size: 20px;
//     margin-top: 10px;
//     text-align: center;
//     color: #887ea1;
//   }
// `;

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { autorizationOperation } from "../../api/operations";
import { setUser } from "../../api/action";
import { Link, Navigate } from "react-router-dom";
import styles from "./autorization.module.css";
import { ROLE } from "../../constants/role";

const authScheme = yup.object().shape({
  login: yup
    .string()
    .matches(/^\w+$/, "Неверный логин. Допускаються только буквы и цифры")
    .required("Заполните логин")
    .min(3, "Неверный логин. Должно быть не меньше 3 символов")
    .max(15, "Неверный логин. Должно быть не больше 15 символов"),
  password: yup
    .string()
    .required("Пароль обязательный")
    .matches(
      /^[\w#%]+$/,
      "Неверно заполнен пароль. Допускаються только буквы и цифры # %"
    )
    .min(3, "Неверно заполнен пароль. Должно быть не меньше 6 символов")
    .max(30, "Неверно заполнен пароль. Должно быть не больше 30 символов"),
});
export const Authorization = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authScheme),
  });

  const dispatch = useDispatch();
  const roleId = useSelector(({ user }) => user.roleId);

  const [serverError, setServerError] = useState("");

  const formError = errors?.login?.message || errors?.password?.message;
  const fullError = serverError || formError;

  const onSubmit = ({ login, password }) => {
    autorizationOperation(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса:' ${error}`);
        return;
      }
      console.log(res, "res");
      dispatch(setUser(res));
      sessionStorage.setItem("userData", JSON.stringify(res));
    });
  };

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.authorizationContainer}>
      <h2 className={styles.heading}>АВТОРИЗАЦИЯ</h2>
      <form className={styles.formStyle} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            placeholder="Login..."
            id="login"
            type="text"
            {...register("login")}
            className={styles.inputField}
          />
        </div>
        <div>
          <input
            placeholder="Password..."
            id="password"
            type="password"
            {...register("password")}
            className={styles.inputField}
          />
        </div>
        <button className={styles.btn} type="submit">
          Войти
        </button>
        <div className={styles.error}>{fullError}</div>

        <Link className={styles.registerLink} to="/register">
          Зарегистрироваться
        </Link>
      </form>
    </div>
  );
};

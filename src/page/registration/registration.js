import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./registration.module.css";
import { regOperation } from "../../api/operations";
import { setUser } from "../../api/action";
import { ROLE } from "../../constants";

const authScheme = yup.object().shape({
  login: yup
    .string()
    .min(3, "Неверная длина логина")
    .required("Поле логин обязательно для заполнения"),

  password: yup
    .string()
    .min(4, "Неверная длина пароля")
    .required("Поле пароль обязательно для заполнения"),
  passcheck: yup
    .string()
    .required("Повтор пароля обязательный")
    .oneOf([yup.ref("password"), null], "Повтор пароля не совпадает"),
});

export const Registration = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
      passcheck: "",
    },
    resolver: yupResolver(authScheme),
  });

  const dispatch = useDispatch();
  const roleId = useSelector(({ user }) => user.roleId);
  const [serverError, setServerError] = useState("");

  const formError = errors?.login?.message || errors?.password?.message;
  const fullError = serverError || formError;

  const onSubmit = ({ login, password }) => {
    regOperation(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса:' ${error}`);
        return;
      }

      dispatch(setUser(res));
      sessionStorage.setItem("userData", JSON.stringify(res));
    });
  };

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }
  return (
    <div className={styles.registrationContainer}>
      <h2 className={styles.heading}>Регистрация</h2>
      <form className={styles.formStyle} onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* TODO(olhayakubovska): Login... -> Логин... */}
          <input
            placeholder="Login..."
            id="login"
            type="text"
            {...register("login")}
            className={styles.inputField}
          />
        </div>
        <div>
          {/* TODO(olhayakubovska): Password... -> Пароль... */}
          <input
            placeholder="Password..."
            id="password"
            type="password"
            {...register("password")}
            className={styles.inputField}
          />
        </div>
        <div>
          {/* TODO(olhayakubovska): Password... -> Повторите пароль... */}
          <input
            placeholder="Password..."
            id="passcheck"
            type="password"
            {...register("passcheck")}
            className={styles.inputField}
          />
        </div>
        <button className={styles.btn} type="submit">
          Зарегистрироваться
        </button>
        <div className="error">{fullError}</div>
      </form>
    </div>
  );
};

// export const Registration = styled(RegistrationContainer)`
//   display: flex;
//   justify-content: center;
//   margin-top: 100px;
//   flex-direction: column;

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
//     margin-top: 15px;
//     text-align: center;
//     color: #887ea1;
//   }
// `;

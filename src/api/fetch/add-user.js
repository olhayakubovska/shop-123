// import { ROLE } from "../../constants/role";

import { ROLE } from "../../constants";

// export const addUser = (login, password) =>
//   fetch("http://localhost:3007/users", {
//     method: "POST",
//     headers: { "Content-Type": "application/json;charset=UTF-8" },
//     body: JSON.stringify({
//       login,
//       password,
//       roleId: ROLE.READER,
//       // session: Math.random().toFixed(10),
//     }),
//   })
//     .then((response) => {
//       // Проверяем, успешен ли запрос
//       if (!response.ok) {
//         throw new Error("Ошибка при создании пользователя");
//       }
//       // Возвращаем тело ответа в виде JSON
//       return response.json();
//     })
//     .catch((error) => {
//       console.error("Ошибка на сервере:", error);
//       throw error;
//     });
// import { ROLE } from "../../constants/role";

export const addUser = async (login, password) => {
  try {
    const response = await fetch("http://localhost:3007/users", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify({
        login,
        password,
        roleId: ROLE.READER,
      }),
    });

    if (!response.ok) {
      throw new Error("Ошибка при создании пользователя");
    }

    const users = await response.json();
    return users;
  } catch (error) {
    console.log("Ошибка на сервере:", error);
    throw error;
  }
};

// .then((response) => {
//   // Проверяем, успешен ли запрос
//   if (!response.ok) {
//     throw new Error("Ошибка при создании пользователя");
//   }
//   // Возвращаем тело ответа в виде JSON
//   return response.json();
// })
// catch((error) => {
//   console.error("Ошибка на сервере:", error);
//   throw error;
// });

// export const addUser = async (login, password) => {
//   try {
//     const response = await fetch("http://localhost:3007/users", {
//       method: "POST",
//       headers: { "Content-Type": "application/json;charset=UTF-8" },
//       body: JSON.stringify({
//         login,
//         password,
//         roleId: ROLE.READER,
//         // session: Math.random().toFixed(10),
//       }),
//     });

//     // Проверяем, успешен ли запрос
//     if (!response.ok) {
//       throw new Error("Ошибка при создании пользователя");
//     }

//     // Возвращаем тело ответа в виде JSON
//     const data = await response.json();
//     return data;

//   } catch (error) {
//     console.error("Ошибка на сервере:", error);
//     throw error;
//   }
// };

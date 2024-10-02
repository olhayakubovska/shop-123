import { ROLE } from "../../constants/role";

export const addUser = (login, password) =>
  fetch("http://localhost:3007/users", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      login,
      password,
      roleId: ROLE.READER,
      // session: Math.random().toFixed(10),
    }),
  })
    .then((response) => {
      // Проверяем, успешен ли запрос
      if (!response.ok) {
        throw new Error("Ошибка при создании пользователя");
      }
      // Возвращаем тело ответа в виде JSON
      return response.json();
    })
    .catch((error) => {
      console.error("Ошибка на сервере:", error);
      throw error;
    });

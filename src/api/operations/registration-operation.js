import { addUser } from "../fetch";
import { sessions } from "../sessions";

export const regOperation = async (loginReg, passwordReg) => {
  const user = await addUser(loginReg, passwordReg);

  const { id, login, password, roleId } = user;

  return {
    error: null,
    res: {
      id,
      login,
      password,
      roleId,

      session: sessions.create(user),
    },
  };
};

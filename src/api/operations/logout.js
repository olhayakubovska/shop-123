import { sessions } from "../sessions";

export const logoutOperation = async (userSession) => {
  sessions.remove(userSession);
};

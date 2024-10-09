import { deleteProduct } from "../fetch";
import { sessions } from "../sessions";
import { ROLE } from "../../constants";

export const deleteProductOperaton = async (productId, session) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

  const access = await sessions.access(session, accessRoles);

  if (!access) {
    return {
      err: "Доступно только админу",
      res: null,
    };
  }
  deleteProduct(productId);

    return {
    err: null,
    res: true,
  };;
};

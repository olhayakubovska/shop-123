import { ROLE } from "../../constants/role";
import { deleteProduct } from "../fetch/delete-product";
import { sessions } from "../sessions";

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

  return true;
};

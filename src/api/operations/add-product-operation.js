import { ROLE } from "../../constants";
import { addProduct } from "../fetch";
import { sessions } from "../sessions";


export const addProductOperation = async (
  name,
  image,
  price,
  category,
  description,
  session
) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

  const access = await sessions.access(session, accessRoles);

  if (!access) {
    return {
      err: "Доступно только админу",
      res: null,
    };
  }

  const updatedProduct = await addProduct(
    name,
    image,
    price,
    category,
    description
  );

  return {
    err: null,
    res: updatedProduct,
  };
};

// import { ROLE } from "../../constants/role";
// import { setUpdateProduct } from "../fetch";
// import { sessions } from "../sessions";

// export const updateProductOperation = async (
//   producId,
//   editedName,
//   editedImage,
//   editedPrice,
//   editedCategory,
//   editedDescription,
//   session
// ) => {
//   const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

//   const access = await sessions.access(session, accessRoles);

//   if (!access) {
//     return {
//       err: "Доступно только админу",
//       res: null,
//     };
//   }

//   const updatedProduct = await setUpdateProduct(
//     producId,
//     editedName,
//     editedImage,
//     editedPrice,
//     editedCategory,
//     editedDescription
//   );

//   return {
//     err: null,
//     res: updatedProduct,
//   };
// };

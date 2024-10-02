import { getCategories } from "../fetch";

export const getCategoriesOperation = async () => {
  const categiries = await getCategories();
  // console.log(categiries, " categoriesOperation");

  return categiries;
};

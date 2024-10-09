import { getCategories } from "../fetch";

export const getCategoriesOperation = async () => {
  const categiries = await getCategories();

  return categiries;
};

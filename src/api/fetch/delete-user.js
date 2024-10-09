export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3007/users/${userId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Ошибка при удалении продукта: ${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

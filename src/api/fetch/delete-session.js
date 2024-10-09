export const deleteSession = async (sesssionId) => {
  try {
    const response = await fetch(
      `http://localhost:3007/sessions/${sesssionId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error(`Ошибка при удалении продукта: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

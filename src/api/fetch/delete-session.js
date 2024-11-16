export const deleteSession = async (sesssionId) => {
  console.log(sesssionId,"sesssionIdFetch")
  try {
    const response = await fetch(
      `http://localhost:3007/sessions/${sesssionId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error(`Ошибка при удалении сессии: ${response.statusText}`);
    }

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

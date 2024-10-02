export const deleteSession = (sesssionId) => {
  fetch(`http://localhost:3007/sessions/${sesssionId}`, {
    method: "DELETE",
  });
};

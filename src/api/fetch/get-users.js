export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:3007/users");
    if (!response.ok) {
      throw new Error("error");
    }

    const users = await response.json();
    // console.log(users,"users fetch")
    return users;

  } catch (error) {
    console.log("error");
  }
};

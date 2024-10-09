export const getSession = async (hash) => {
  try {
    const response = await fetch(`http://localhost:3007/sessions?hash=${hash}`);

    if (!response.ok) {
      throw new Error("error");
    }

    const session = await response.json();
    
    return session;

  } catch (error) {
    console.log("err,", error);
    throw error;
  }
};

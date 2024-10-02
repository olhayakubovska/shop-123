export const getSession = async (hash) =>
    fetch(`http://localhost:3007/sessions?hash=${hash}`)
      .then((loadedSession) => loadedSession.json())
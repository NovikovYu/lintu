const saveSessionToLocalStorage = (
  sessionData: Record<string, string>,
): void => {
  try {
    const sessionJSON = JSON.stringify(sessionData);
    // localStorage.setItem('session', sessionJSON);
    sessionStorage.setItem('session', sessionJSON);
  } catch (error) {
    console.error(
      ' An error occurred while saving the session to local storage:',
      error,
    );
  }
};

export default saveSessionToLocalStorage;

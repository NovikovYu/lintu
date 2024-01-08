const deleteSessionFromLocalStorage = () => {
  try {
    localStorage.removeItem('session');
  } catch (error) {
    console.error(
      'An error occurred while terminating the session and deleting from local storage:',
      error,
    );
  }
};

export default deleteSessionFromLocalStorage;

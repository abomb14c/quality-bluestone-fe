export const retrieveSessionStorage = (key, stateChanger) => {
  const sessionData = sessionStorage.getItem(key);
  if (sessionData) stateChanger({ [key]: sessionData.split(',') });
};

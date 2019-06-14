export const retrieveSessionStorage = (key, stateChanger) => {
  const sessionData = sessionStorage.getItem(key);
  console.log(sessionData);
  if (sessionData) stateChanger({ [key]: JSON.parse(sessionData) });
};

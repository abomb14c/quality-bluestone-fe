export const updateFolder = folder => {
  return {
    type: 'OPEN_FOLDER',
    name: folder,
    active: true,
  };
};

export const clearFolder = () => {
  return {
    type: 'CLOSE_FOLDER',
    active: false,
  };
};

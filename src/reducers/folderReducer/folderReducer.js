const intitialState =  '';

const folderReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "OPEN_FOLDER":
      return action.name;
    default:
      return state;
  }
};

export default folderReducer;
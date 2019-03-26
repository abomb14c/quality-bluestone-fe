const intitialState =  {};

const folderReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "OPEN_FOLDER":
      return {name: action.name, active: action.active};
    case "CLOSE_FOLDER":
      return {active: action.active}
    default:
      return state;
  }
};

export default folderReducer;
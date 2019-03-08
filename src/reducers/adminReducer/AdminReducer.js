const intitialState =  '';

const AdminReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "OPEN_EMPLOYEES":
      return action.active;
    case "OPEN_FILES":
      return action.active;
    default:
      return state;
  }
};

export default AdminReducer;

const intitialState = false;

const AdminReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "OPEN_EMPLOYEES":
      return action.employees;
    default:
      return state;
  }
};

export default AdminReducer;
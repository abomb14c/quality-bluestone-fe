const intitialState = {};

const userReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { userId: action.userId };
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
};

export default userReducer;
const intitialState = {};

const userReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { userId: action.userId, role: action.role };
    case "ADD_ADMIN":
      return {admin: action.admin, role: action.role}
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
};

export default userReducer;
const intitialState = 'files';

const AdminReducer = (state = intitialState, action) => {
  switch (action.type) {
    case 'OPEN_EMPLOYEES':
      return action.active;
    case 'CLOSE_EMPLOYEES':
      return '';
    case 'OPEN_FILES':
      return action.active;
    case 'OPEN_ADD_FILES':
      return action.active;
    case 'OPEN_ADD_EMPLOYEE':
      return action.active;
    default:
      return state;
  }
};

export default AdminReducer;

export const updateUser = user => {
  return {
    type: "ADD_USER",
    userId: user.userId,

  };
};

export const logOutUser = () => {
  return {
    type: "LOGOUT_USER"
  }
}

export const updateAdmin = admin => {
  return {
    type: "ADD_ADMIN",
    admin: admin.userId,
 
  };
};
export const updateUser = user => {
  return {
    type: "ADD_USER",
    userId: user.userId,
    role: user.role,
    apiKey: user.apiKey

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
    role: admin.role
  };
};
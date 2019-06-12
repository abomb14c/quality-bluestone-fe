export const updateEmployees = () => ({
  type: 'OPEN_EMPLOYEES',
  active: 'employees',
});

export const updateFiles = () => ({
  type: 'OPEN_FILES',
  active: 'files',
});

export const addFolder = () => ({
  type: 'OPEN_ADD_FILES',
  active: 'addFiles',
});

export const addEmployee = () => ({
  type: 'OPEN_ADD_EMPLOYEE',
  active: 'addEmployee',
});

export const closeEmployees = () => ({
  type: 'CLOSE_EMPLOYEES',
  active: 'none',
});

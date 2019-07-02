//https://protected-everglades-28715.herokuapp.com/
import Axios from 'axios';
// export const apiUrl = 'http://localhost:3001/';
export const apiUrl = 'https://protected-everglades-28715.herokuapp.com/';

export const headerInfoWithAuth = () => ({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Token': sessionStorage.getItem('authToken'),
});

export const headerInfoWithoutAuth = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
};

export const apiEndpoints = {
  get: {
    users: 'get_all_users',
    user: 'get_user',
    files: 'get_all_files',
    file: 'get_file',
    folders: 'get_all_folders',
    folder: 'get_folder',
  },
  post: {
    authenitcate: 'authenticate',
    user: 'create_user',
    file: 'upload_files',
    folder: 'create_folder',
  },
  patch: {
    user: 'update_user',
  },
  delete: {
    user: 'delete_user',
    file: 'delete_file',
    folder: 'delete_folder',
  },
};

// FOR ALL CALLS BELOW
// formData should be either an empty string or a hash - i.e. formData = { folder_name: 'Name of Folder', file_name: 'Name of File'}

// GET ALL FOLDERS
// This call will retrieve the folders. Pass in an empty string in for formData and it should return all folders available for
// that user.

// This call will retrieve one folder. You must pass in the name of the folder in the formData. Ex - formData = { folder_name: "Name of Folder"}

export const fetchFolder = async formData => {
  await Axios.get(`${apiUrl}get_all_folders`, {
    params: { data: formData },
    headers: headerInfoWithAuth,
  })
    .then(response => {
      console.log(response);
      response.json();
    })
    .catch(error => {
      console.log(error);
    });
};

// GET ALL FILES
// This call will retrieve all of the files for a specific folder or user.
// If you want to return all the files related to the current user, you don't need to include a folderName,
// just make the API call with an empty string for the formData.
// If you want to return all files related to a folder, the formData should include the folderName.
// ex - formData = { folder_name: "Name of Folder"}
// If you want to return the folders for another user, use - formData = { email: "Email of User"}

export const fetchAllFiles = async formData => {
  await Axios.get(`${apiUrl}get_all_files`, {
    params: { data: formData },
    headers: headerInfoWithAuth,
  })
    .then(response => {
      console.log(response);
      response.json();
    })
    .catch(error => {
      console.log(error);
    });
};

// This call will return one file for that user. The formData should look like formData = { file_name: "Name of File"}

export const fetchFile = async formData => {
  await Axios.get(`${apiUrl}get_file`, {
    params: { data: formData },
    headers: headerInfoWithAuth,
  })
    .then(response => {
      console.log(response);
      response.json();
    })
    .catch(error => {
      console.log(error);
    });
};

// GET ALL USERS
// This call will return all users. This should only be called by the admin or accountant. The formData can be an empty string
// and it will do a permissions check on the backend to make sure the user has permission to request the users.
// An example returned data is
// [{
//    "id": 1,
//    "email": "test_1@example.com",
//    "first_name": "John",
//    "last_name": "Smith",
//    "address": "512 New Street, CO 72777",
//    "phone_number": "223-112-3333",
//    "status": "inactive",
//    "role": "worker"
//  }]

// This call will return one user. The formData MUST have the user's email in it - formData = { email: "User's Email"}.
// The response will be identical to the one above, just with one user. If you would like to return the users files, refer to the API
// call to return a file and include the user's email as a parameter.

export const fetchUser = async formData => {
  await Axios.get(`${apiUrl}get_user`, {
    params: { data: formData },
    headers: headerInfoWithAuth,
  })
    .then(response => {
      console.log(response);
      response.json();
    })
    .catch(error => {
      console.log(error);
    });
};

// This call will update a user with whatever different information you would like to update. The formData MUST contain
// the user's email address - formData = { email: "User's Email"}. The formData must also contain the attribute of the user
// you would like to modify in the one of the following forms -
// formData= {
//   first_name: "User's First Name",
//   last_name: "User's Last Name",
//   street: "User's Street with Number",
//   city: "User's City",
//   state: "User's State"
//   zip_code: 22772,
//   phone_number: "User's Phone Number",
//   role: "User's role", (This is one of admin, worker, driver, accountant)
//   status: "User's Status" (This is either active or inactive)
// }

export const updateUser = async formData => {
  await Axios.patch(`${apiUrl}update_user`, formData, headerInfoWithAuth)
    .then(response => {
      console.log(response);
      response.json();
    })
    .catch(error => {
      console.log(error);
    });
};

// This call will delete a user's record. If you would like to inactivate a user
// use the update API call with { status: 'inactive' } in the formData. If you would like
// to delete the user, include the user's email in the formData. Ex- formData = { email: 'Email of User to Delete' }
// Only an admin will be able to delete a user.

export const deleteUser = async formData => {
  await Axios.patch(`${apiUrl}delete_user`, formData, headerInfoWithAuth)
    .then(response => {
      console.log(response);
      response.json();
    })
    .catch(error => {
      console.log(error);
    });
};

// get requests

export const getData = async (formData, endpoint) => {
  try {
    const response = await Axios.get(apiUrl + endpoint, {
      params: { data: formData },
      headers: headerInfoWithAuth(),
    });
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

//post requests

// patch requests

// delete requests
export const deleteItem = async (formData, endpoint) => {
  try {
    const response = await Axios.post(
      apiUrl + endpoint,
      { data: formData },
      { headers: headerInfoWithAuth() }
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

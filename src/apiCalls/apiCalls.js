// import {weatherKey} from './../keys';


// export const fetchWeather = async () => {
//     const url = `api.openweathermap.org/data/2.5/weather?zip=18847&APPID=${weatherKey}`;
 
//     const response = await fetch(url);
//     console.log(response)
//     const weatherData = await response.json();
//     console.log(weatherData)
 
// }
// https://protected-everglades-28715.herokuapp.com/
import Axios from 'axios';
import Admin from '../components/Admin/Admin';
export const apiUrl = 'http://localhost:3001/'

export const headerInfoWithAuth = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Token': sessionStorage.getItem('authToken')
}

export const headerInfoWithoutAuth = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*'
}

// This call will retrieve the folders. Pass in an empty string in for formData and it should return all folders available for
// that user.

export const fetchFolders = async (formData) => {
  await Axios.get(`${apiUrl}get_all_folders`, formData, headerInfoWithAuth).then((response) => {
    console.log(response);
    response.json()
  }).catch((error) => {
    console.log(error)
  })
}

// This call will retrieve one folder. You must pass in the name of the folder in the formData. Ex - formData = { folder_name: "Name of Folder"}

export const fetchFolder = async (formData) => {
  await Axios.get(`${apiUrl}get_all_folders`, formData, headerInfoWithAuth).then((response) => {
    console.log(response);
    response.json()
  }).catch((error) => {
    console.log(error)
  })
}

// This call will retrieve all of the files for a specific folder or user.
// If you want to return all the files related to the current user, you don't need to include a folderName, 
// just make the API call with an empty string for the formData.
// If you want to return all files related to a folder, the formData should include the folderName.
// ex - formData = { folder_name: "Name of Folder"}
// If you want to return the folders for another user, use - formData = { email: "Email of User"}

export const fetchAllFiles = async(formData) => {
  await Axios.get(`${apiUrl}get_all_files`, formData, headerInfoWithAuth).then((response) => {
    console.log(response);
    response.json();
  }).catch((error) => {
    console.log(error)
  })
}

// This call will return one file for that user. The formData should look like formData = { file_name: "Name of File"}

export const fetchFile = async(formData) => {
  await Axios.get(`${apiUrl}get_file`, formData, headerInfoWithAuth).then((response) => {
    console.log(response);
    response.json();
  }).catch((error) => {
    console.log(error)
  })
}

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

export const fetchAllUsers = async(formData) => {
  await Axios.get(`${apiUrl}get_all_users`, formData, headerInfoWithAuth).then((response) => {
    console.log(response);
    response.json();
  }).catch((error) => {
    console.log(error)
  })
}
 
// This call will return one user. The formData MUST have the user's email in it - formData = { email: "User's Email"}.
// The response will be identical to the one above, just with one user. If you would like to return the users

export const fetchUser = async(formData) => {
  await Axios.get(`${apiUrl}get_user`, formData, headerInfoWithAuth).then((response) => {
    console.log(response);
    response.json();
  }).catch((error) => {
    console.log(error)
  })
}

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

export const updateUser = async(formData) => {
  await Axios.patch(`${apiUrl}update_user`, formData, headerInfoWithAuth).then((response) => {
    console.log(response);
    response.json();
  }).catch((error) => {
    console.log(error)
  })
}
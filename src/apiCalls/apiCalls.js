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

export const fetchFiles = async(formData) => {
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
 
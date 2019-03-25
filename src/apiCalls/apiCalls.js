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
export const apiUrl = 'https://protected-everglades-28715.herokuapp.com/'

const formData = {

}
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

export const fetchFolders = async (formData) => {
  await Axios.get(`${apiUrl}get_all_folders`, formData, headerInfoWithAuth).then((response) => {
    console.log(response);
    response.json()
  }).catch((error) => {
    console.log(error)
  })

}
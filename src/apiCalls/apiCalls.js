import weatherKey from './../keys';

export const fetchWeather = async() => {
    const url = `i.openweathermap.org/data/2.5/weather?lat=41.9434&lon=-75.5997&APPID=${weatherKey}`;
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData)
    return weatherData;
}
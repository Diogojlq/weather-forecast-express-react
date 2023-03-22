const axios = require('axios');

async function getLocationName() {
  let locationName = await fetch('https://ipapi.co/json/')
  .then((response) => {
    let location = response.json()
    return location
  })
  .then((location) => {
      let locationName = location.city
      return locationName
  })
  return locationName
}

async function getForecastUrl() {
  
  let FORECAST_URL = await fetch('https://ipapi.co/json/')
  .then((response) => {
    let data = response.json()
    return data
  })
  .then((data) => {
    let lat = (data.latitude)
    let long = (data.longitude)
    let FORECAST_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=3d96e16f7aa6c20fcfdcece0ac880943&lang=pt_br&units=metric&exclude=current,minutely,hourly,alerts`
    return FORECAST_URL
}) 
  return FORECAST_URL 
} 

async function loadForecast() {
  let FORECAST_URL = await getForecastUrl()
  await axios.get(FORECAST_URL) 
    .then((response) => {
      forecast = response.data.daily
  })
  .catch(function (error) {
      console.error(error);
    })
  return forecast
}

module.exports = {
    loadForecast,
    getLocationName,
}
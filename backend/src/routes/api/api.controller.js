const { loadForecast } = require("../../models/api/api.model");
const { getLocationName } = require('../../models/api/api.model')


async function getForecast() {
  let forecast = await loadForecast();
  return forecast;
}

async function getLocation() {
    let location = await getLocationName()
    return location
} 

async function getImgUrlForToday() {
    let response = await loadForecast()
    let id = response[0].weather[0].icon
    let imgUrlToday = `https://openweathermap.org/img/wn/${id}@2x.png`
    return imgUrlToday
}

async function getImgUrlForTomorrow() {
    let response = await loadForecast()
    let id = response[1].weather[0].icon
    let imgUrlTomorrow = await `https://openweathermap.org/img/wn/${id}@2x.png`
    return imgUrlTomorrow
}

async function getImgUrlForTDAT() {
    let response = await loadForecast()
    let id = response[2].weather[0].icon
    let imgUrlTDAT = `https://openweathermap.org/img/wn/${id}@2x.png`
    return imgUrlTDAT
}

module.exports = {
  getForecast,
  getLocation,
  getImgUrlForToday,
  getImgUrlForTomorrow,
  getImgUrlForTDAT,
};

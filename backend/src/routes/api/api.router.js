const express = require("express");
const apiRouter = express.Router();

const { getImgUrlForToday,
  getImgUrlForTomorrow,
  getImgUrlForTDAT,
  getLocation,
  getForecast, } = require('./api.controller')


apiRouter.get("/", async (req, res) => {
  let forecast = await getForecast();
  let location = await getLocation();
  let imgUrlToday = await getImgUrlForToday();
  let imgUrlTomorrow = await getImgUrlForTomorrow();
  let imgUrlTDAT = await getImgUrlForTDAT();
  res.render("index", {
    forecast: forecast,
    location : location,
    imgUrlToday : imgUrlToday,
    imgUrlTomorrow : imgUrlTomorrow,
    imgUrlTDAT : imgUrlTDAT,
  });
});



module.exports = apiRouter;

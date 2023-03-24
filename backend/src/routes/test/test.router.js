const express = require("express");
const testRouter = express.Router();

const { getForecast } = require('./test.controller')

testRouter.get("/", getForecast);



module.exports = testRouter;

const { loadForecast } = require("../../models/test/test.model");

async function getForecast(req,res) {
  return res.status(200).json(await loadForecast());
}


module.exports = {
    getForecast,
}
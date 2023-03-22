const mongoose = require('mongoose');

const climaSchema = new mongoose.Schema({

        "temp": Number,
        "feels_like": Number,
        "temp_min": Number,
        "temp_max": Number,
        "pressure": Number,
        "humidity": Number

})

const latLonSchema = new mongoose.Schema({
        
})

module.exports = mongoose.model('clima', climaSchema);
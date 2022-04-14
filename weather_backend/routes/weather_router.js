const express = require("express");

const weatherRoutes = express.Router();
const axios = require('axios');


weatherRoutes.post('/current-weather', async (req, res, next) => {
    const { city_id } = req.body;
    let weatherData;

    try{
        if(city_id != undefined){
            try{
                weatherData = await axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${city_id}&appid=538882fc8387290c6cee83f313a6acf5`);
                const current_weather = weatherData.data;
                return res.status(200).json(current_weather);
            }
            catch(e){
                return res.status(500).json({message: e.message || 'Intenal Server Error.'});
            }
        }else{
            throw new Error('City id not defined properly for current.')
        }
    }
    catch(e){
        res.status(404).json({message: e.message || 'Internal Server Error'});
    }
})

weatherRoutes.post('/forecast-weather', async (req, res, next) => {
    const { city_id } = req.body;
    let forecastData;

    try{
        if(city_id != undefined){
            try{
                forecastData = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=${city_id}&appid=538882fc8387290c6cee83f313a6acf5`);
                const forecast_weather = forecastData.data;
                return res.status(200).json(forecast_weather);
            }
            catch(e){
                return res.status(500).json({message: e.message || 'Intenal Server Error.'});
            }
        }else{
            throw new Error('City id not defined properly for forecast.')
        }
    }
    catch(e){
        res.status(404).json({message: e.message || 'Internal Server Error'});
    }
})

module.exports = weatherRoutes;
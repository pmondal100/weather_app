const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const weatherRoutes = require('./routes/weather_router');

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.use('/', weatherRoutes);

app.listen(5000);
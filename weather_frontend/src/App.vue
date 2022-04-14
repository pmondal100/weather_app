<template>
<div class="app">
  <Header title="Weather Genie"/>
  <Dropdown @current-city="showCard"/>
  <div v-show="this.showWeatherCard && !this.showErrorModal">
    <WeatherCard :weather_type="this.weatherType" :title="this.city" :body="this.weatherDes" :btnHeader="'Forecast'" @showLoader="this.showLoader" @toggle-forecast="toggleForecast"/>
  </div>
  <div v-if="this.showForecast && !this.showErrorModal">
    <h1 class="foreHeading">Slide through the forecast: </h1>
    <Forecast :forecastData="this.forecastArr"/>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Dropdown from './components/Dropdown.vue';
import WeatherCard from './components/WeatherCard.vue';
import Forecast from './components/Corousel.vue';
import axios from 'axios';
import { API_ENDPOINTS } from './constants';

export default {
  name: 'App',
  components: {
    Header,
    Dropdown,
    WeatherCard,
    Forecast,
  },
  data() {
    return {
      showWeatherCard: false,
      city: '',
      showForecast: false,
      cityId: '',
      weatherDes: '',
      weatherType: '',
      forecastArr: '',
      showLoader: true,
      showErrorModal: false,
      errorMessage: ''
    }
  },
  methods: {
    async showCard(id, currCity) {
      this.showWeatherCard = true;
      this.city = currCity;
      this.cityId = id;
      let weatherData;
      let forecastData;
      
      try{
        weatherData = await axios.post(API_ENDPOINTS[0], { city_id: this.cityId });
      }
      catch (error){
        this.showErrorModal = true;
        this.errorMessage = error.message;
        alert(this.errorMessage);
        return;
      }

      try{
        forecastData = await axios.post(API_ENDPOINTS[1], { city_id: this.cityId });
      }
      catch (error){
        this.showErrorModal = true;
        this.errorMessage = error.message;
        alert(this.errorMessage);
        return;
      }
      this.forecastArr = forecastData.data.list;
      const wDes = JSON.parse(JSON.stringify(weatherData.data.weather[0])).description;
      const wMain = JSON.parse(JSON.stringify(weatherData.data.weather[0])).main;
      const temperature = JSON.parse(JSON.stringify(weatherData.data.main)).temp;
      this.weatherType = wMain.toLowerCase();
      this.weatherDes = wMain + ', ' + wDes + ' with a temperature of ' + (parseInt(temperature) - 273.15).toFixed(2) + '°C.';
      this.showLoader = false;
      this.showErrorModal = false;
    },

    toggleForecast() {
      this.showForecast = !this.showForecast;
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,300&display=swap');

.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.foreHeading {
  font-family: 'Raleway', sans-serif;
  font-size: 2em;
  margin-bottom: 30px;
}
</style>

<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button v-for="index in forecastData.length - 1" :key="index" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :aria-label="'Slide ' + (index + 1)"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
    <h5>Forecast</h5>
  </div>
    </div>
    <div v-for="index in forecastData.length - 1" :key="index" class="carousel-item" id="img">
      <img :src="WeatherImage(forecastData[index].weather[0].main.toLowerCase())" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      <h5>{{ forecastData[index].weather[0].main }}, {{ forecastData[index].weather[0].description }} with a temperature of {{ (parseInt(forecastData[index].main.temp) - 273.15).toFixed(2) }}°C.</h5>
      <p>{{ properDate(forecastData[index].dt_txt) }}, {{ getDayName(forecastData[index].dt_txt, 'en') }}</p>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
import { WeatherImage } from './corouselImageSelector';
export default {
    name: 'ForecastCorousel',
    methods: {
      WeatherImage: WeatherImage,
      getDayName: (dateStr, locale) => {
         var date = new Date(dateStr);
         return date.toLocaleDateString(locale, { weekday: 'long' });  
      },
      properDate: (dateStr) => {
        let tempDate = new Date(dateStr); 
        let tempDay = tempDate.getDate();
        let tempMonth = tempDate.getMonth().toString().length == 1 ? ('0' + tempDate.getMonth()) : tempDate.getMonth();
        let tempYear = tempDate.getFullYear();
        let tempHours = tempDate.getHours().toString().length === 1 ? '0' + tempDate.getHours() : tempDate.getHours();
        let tempMinutes = tempDate.getMinutes().toString().length === 1 ? '0' + tempDate.getMinutes() : tempDate.getMinutes();
        return tempHours + ':' + tempMinutes + ', ' +tempDay + '-' + tempMonth + '-' + tempYear;
      }
    },
    props: {
      forecastData: Object,
    }
}
</script>

<style scoped>
    .carousel {
        width: 60%;
        margin: auto;
        margin-bottom: 80px;
    }
</style>
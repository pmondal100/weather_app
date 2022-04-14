<template>
    <div class="card" style="width: 18rem;">
  <img :src="WeatherImage(weather_type)" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">{{ title }}</h4>
    <h6>Current weather in {{ title }}:</h6>
    <p v-if="body" class="card-text">{{ body }}</p>
    <Loader v-else />
    <button @click="forecastClickHandler" type="button" class="btn btn-primary">{{ btnHeader }}</button>
  </div>
</div>
</template>
<script>
import Loader from './Loader.vue';
import { WeatherImage } from './imageSelector';
export default {
  components: { Loader },
    name: 'WeatherCard',
    props: {
        title: String,
        body: String,
        btnHeader: String,
        showLoader: Boolean,
        weather_type: String
    },

    methods: {
        forecastClickHandler() {
        this.$emit("toggle-forecast");
    },
    WeatherImage: WeatherImage
    }
}
</script>

<style scoped>
    div{
        margin: auto;
        margin-bottom: 80px;
    }

    img {
      width: 60%;
      margin: auto;
      margin-top: 10px;
    }
</style>
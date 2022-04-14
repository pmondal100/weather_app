<template>
<div class="dropdown">
  <button class="btn btn-info btn-lg dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    {{ this.currentCity }}
  </button>
  <ul class="dropdown-menu">
    <li class="dropdown-item" v-for="currEle in this.cityList" :key=currEle.id @click="(e) => onClickHandler(e, currEle.id)">{{ currEle.name }}</li>
  </ul>
</div>
</template>

<script>
import { PLATFORM_CONSTANTS } from '../constants';
export default {
   name: 'AppDropdown',
   data() {
       return {
           currentCity: 'Select City',
           cityList: PLATFORM_CONSTANTS.CITY_LIST
       }
   },
   methods: {
       onClickHandler(e, id) {
           this.currentCity = e.target.innerText
           this.$emit('current-city', id, e.target.innerText);
       }
   }
}
</script>

<style>
    .btn {
        color: white;
    }
    .dropdown-item{
        cursor: pointer;
    }
    .dropdown {
        margin-bottom: 100px;
    }
</style>
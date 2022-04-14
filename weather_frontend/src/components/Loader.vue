<template>
    <div class="spinner-border" style="width: 2rem; height: 2rem;" role="status">
  <span class="sr-only"></span>
</div>
</template>

<script>
export default {
    name: 'ForecastLoader'
}
</script>

<style scoped>
  .spinner-border {
    display: flex;
    justify-content: center;
  }
</style>
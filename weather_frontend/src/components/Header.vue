<template>
    <h1 class="head">{{ title }}</h1>
</template>

<script>
export default {
    name: 'AppHeader',
    props: {
        'title': String,
        'size': String
    }
}
</script>

<style scoped>
.head {
    font-family: 'Raleway', sans-serif;
    font-size: 5em;
    margin-bottom: 50px;
}
</style>
<template>
  <div id="app">
    <questions />
  </div>
</template>

<script>
import Questions from './screens/Questions.vue'

export default {
  name: 'App',
  components: {
    Questions,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

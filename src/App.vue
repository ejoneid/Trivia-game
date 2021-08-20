<template>
    <div id="app">
        <h1>Trivia Game</h1>
        <TriviaConfigure />
    </div>
</template>

<script>
import TriviaConfigure from "./components/TriviaConfigure.vue";

export default {
    name: "App",
    components: {
        TriviaConfigure,
    },
};
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

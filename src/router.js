import Vue from "vue";
import VueRouter from "vue-router";
import TriviaConfigure from "./screens/TriviaConfigure.vue";
import Questions from "./screens/Questions.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/configure",
        alias: "/",
        component: TriviaConfigure,
    },
    {
        path: "/game",
        component: Questions,
    },
];

export default new VueRouter({ routes });

import Vue from "vue";
import VueRouter from "vue-router";
import TriviaConfigure from "./screens/TriviaConfigure.vue";
import Questions from "./screens/Questions.vue";
import Results from "./screens/Results.vue";

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
    {
        path: "/result",
        name: "result",
        component: Results,
        props: true,
    },
];

export default new VueRouter({ routes });

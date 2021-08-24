import Vue from "vue";
import VueRouter from "vue-router";
import TriviaConfigure from "./components/TriviaConfigure.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/configure",
        alias: "/",
        component: TriviaConfigure,
    },
];

export default new VueRouter({ routes });

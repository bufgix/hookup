import Vue from "vue";
import Router from "vue-router";
import Result from "../components/pages/Result";
import AddSite from "../components/pages/AddSite";
import ConfigureScreen from "../components/pages/ConfigureScreen";

Vue.material.router.linkActiveClass = "active";

Vue.use(Router);

export default {
  PageRouter: new Router({
    routes: [
      {
        path: "/",
        redirect: { name: "watch" }
      },
      {
        path: "/watch",
        name: "watch",
        component: Result
      },
      {
        path: "/add",
        name: "add-site",
        component: AddSite
      },
      {
        path: "/configure",
        name: "config",
        component: ConfigureScreen
      }
    ],
    linkActiveClass: "active"
  })
};

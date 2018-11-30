import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Dashboard from "../components/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../components/HelloWorld.vue")
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/logout",
      component: Logout
    },
    {
      path: "/dashboard",
      component: Dashboard
    }
  ]
});

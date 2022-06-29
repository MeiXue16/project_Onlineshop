import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/list",
    name: "MyList",
    component: () => import("../views/MyList.vue"),
  },
  {
    path: "/cart",
    name: "MyCart",
    component: () => import("../views/MyCart.vue"),
  },
  {
    path: "/my",
    name: "MyPage",
    component: () => import("../views/MyPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

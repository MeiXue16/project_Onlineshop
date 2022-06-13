import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/MyList",
    name: "MyList",
    component: () => import("../views/MyList.vue"),
  },
  {
    path: "/MyCart",
    name: "MyCart",
    component: () => import("../views/MyCart.vue"),
  },
  {
    path: "/MyPage",
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

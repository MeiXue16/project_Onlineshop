import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";

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
    component: () => import("@/views/MyList.vue"),
  },
  {
    path: "/cart",
    name: "MyCart",
    component: () => import("@/views/MyCart.vue"),
  },
  {
    path: "/my",
    name: "MyPage",
    component: () => import("@/views/MyPage.vue"),
  },
  {
    path: "/search",
    name: "Search",
	children:[
		{
			path:'/',
			name:'Index',
			component:()=>  import('@/views/search/SearchIndex.vue'),
			
		},
		{
			path:'list',
			name:'List',
			component:()=>  import('@/views/search/SearchList.vue'),
			
		}
	],
    component: () => import("@/views/search/Search.vue"),
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

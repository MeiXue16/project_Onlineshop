/* eslint-disable */ 
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
//public css file
import '@/assets/css/common.css';
//Taobao Wireless Adaptation File
import '@/assets/js/flexible'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

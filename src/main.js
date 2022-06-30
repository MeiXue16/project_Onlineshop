/* eslint-disable */ 
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
//public css file 公共css文件
import '@/assets/css/common.css';
//字体图标css文件：放大镜，客服
import '@/assets/css/iconfont.css';
//Taobao Wireless Adaptation File 淘宝无线适配文件
import '@/assets/js/flexible';

//引入ly-tab插件
import LyTab from 'ly-tab';
Vue.use(LyTab);



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

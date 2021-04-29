import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// 导入的是src/store/index.js
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store, //注册
  render: h => h(App)
}).$mount("#app");

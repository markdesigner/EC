import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
=======
>>>>>>> e70bf68... init
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
<<<<<<< HEAD

Vue.use(ElementUI);
=======
>>>>>>> e70bf68... init

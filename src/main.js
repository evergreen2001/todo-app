import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import{routes} from './router/index'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({

  routes
})

 

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

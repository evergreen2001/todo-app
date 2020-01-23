import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import{routes} from './router/index'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource)
Vue.http.options.root='https://todo-app-2bd4a.firebaseio.com/'



const router = new VueRouter({

  routes
})

 

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

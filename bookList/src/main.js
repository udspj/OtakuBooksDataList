import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'

// Vue.use(ElementUI)

// new Vue({
// 	el: '#app',
// 	render: h => h(App)
// })

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueResource);


// const Bar = { template: '<div>bar0000000</div>' }

import listComp from './goodList.vue'
const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/list/:type',
      component: listComp
    }, 
    {
      path: '/',
      component: listComp
    }
  ]
})

const app = new Vue({ 
	router, 
	template: '<App />', 
	components: {
	 App 
	} ,
	render: h => h(App)
}).$mount('#app')

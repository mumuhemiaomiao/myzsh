import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import Vuex from 'vuex'
// 按需引入，需要什么用什么
import { Tabbar, TabItem ,Button} from 'mint-ui';


Vue.use(Vuex)
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name, Button);
import '../node_modules/mint-ui/lib/style.css'


// 使用路由
Vue.use(vueRouter)






import router from './assets/js/router.js'
import store from './assets/js/data.js'
import './assets/js/my.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store
})

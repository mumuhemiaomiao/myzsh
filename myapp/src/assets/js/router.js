import vueRouter from 'vue-router'


import buy  from '../../components/footer/buy.vue'
import find  from '../../components/footer/find.vue'
import my  from '../../components/footer/my.vue'
import order  from '../../components/footer/order.vue'



export default new vueRouter({
	routes:[
		{
			path:'/buy',
			component:buy
		},
		{
			path:'/find',
			component:find
		},
		{
			path:'/my',
			component:my
		},
		{
			path:'/order',
			component:order
		},
		{
			path:'*',
			// component:buy

			// 重定向，书写的是路径
			redirect:'/buy'
		}
	]
})
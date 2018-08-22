	<template>
		<mt-tabbar v-model="selected">
		  <mt-tab-item id="外卖">
		    <router-link to="/buy">外卖</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="订单">
		    
		     <router-link to="/order">订单</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="发现">
		   
		     <router-link to="/find">发现</router-link>
		  </mt-tab-item>
		  <mt-tab-item id="我的">
		   
		     <router-link to="/my">我的{{this.$store.state.count}}</router-link>
		  </mt-tab-item>
		</mt-tabbar>
	</template>
	<script>
		export default{
			data(){
				return{
					selected:"外卖"
				}
			}
		}
	</script>
	<style>
		.mint-tab-item-label{
			font-size:40px;
		}
	</style>
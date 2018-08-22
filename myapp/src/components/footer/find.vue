	<template>
	<main>
		<h1>这是find页面{{this.$store.state.count}}</h1>
		<button @click="add">购物车</button>
		<p>{{this.$store.getters.getNum}}</p>
	</main>

	</template>
	<script>
		export default{
			methods:{
				add(){

					this.$store.commit('jian',-2)
				}
			}
		}
	</script>
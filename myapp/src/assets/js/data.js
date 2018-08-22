/*
* @Author: Administrator
* @Date:   2018-08-21 10:01:03
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-21 16:33:14
*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	// state相当于data
	// 使用数据 this.$store.state.数据名
	// this.$store.state.count++可以通过该方式控制数据，但是工作中禁止这样操作，可以直接使用mutations内部的方法
  state: {
    count: 0,
    num:'hello',
    weather:''
  },
  	// mutations相当于method
  	// this.$store.commit('方法名',参数)
  mutations: {
    increment (state,a) {
      state.count+=a
    },
    jian(state){
    	state.count--
    },
    add(a){
      console.log(a)
    }
  },

  // 相当于对数据做一些处理，再使用this.$store.getters.方法名
  getters:{
    getNum(state){
      return '商品的数量'+state.count+'个'
    }
  }

})
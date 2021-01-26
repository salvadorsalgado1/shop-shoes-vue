import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:0,
    items:[],
    picks:[],
    checkout:[]
  },
  mutations: {
    cartIncrement(state, payload){
      state.cart++;
      
      state.checkout.push(payload);
    },
    removeCartItem(state, payload){
      
    }
    
  },
  actions: {
  },
  modules: {
  }
})

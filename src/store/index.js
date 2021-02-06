import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:0,
    items:[],
    picks:null,
    checkout:[],
    total:0,
    discounts:0,
    women:null,
    men:null,
    latest:null,
    trending:null,
    clearance:null,
    id:null,
    check:null
  },
  mutations: {
    cartIncrement(state, payload){
      state.cart++;
      state.checkout.push(payload);
      
    },
    removeCartItem(state, payload){
      state.checkout = state.checkout.filter(list=>{
        return list.id !== payload.id
      })
    },
    viewItem(state,payload){
      state.id = payload
    },
    setCheck(state,payload){
      state.check = payload
    }
    
    
  },
  actions: {
   removeCartItem(context){
      context.commit('removeCartItem',id);
    }


  },
  modules: {
  }
})

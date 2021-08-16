import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
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
    check:null,
    edit:[]

  },
  mutations: {
    cartIncrement(state, payload){
      state.cart++;
      state.checkout.push(payload);
    },
    removeCartItem(state, payload){
      state.checkout.splice(payload.index,1);
    },
    viewItem(state,payload){
      state.id = payload
    },
    setCheck(state,payload){
      state.check = payload
    },
    setEditShoe(state, payload){
      state.edit = payload;
    }
    
    
  },
  actions: {
    
   removeCartItem(context){
      context.commit('removeCartItem',id);
    },
    editShoeItems({commit}, payload){
       console.log(payload)
       //console.log(payload.id)
      Axios.get(`/api/check/info/${payload}`)
      .then(response=>{
        commit('setEditShoe', response.data)
      })
    }


  },
  modules: {
  }
})

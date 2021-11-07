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
    },
    setClearance(state, payload){
      state.clearance = payload
    },
    setLatest(state, payload){
     state.latest = payload
    },
    setMensShoes(state, payload){
      state.men = payload
    },
    setStaff(state, payload){
      state.picks = payload
    },
    setTrending(state, payload){
      state.trending = payload
    },
    setWomensShoes(state, payload){
      state.women = payload
    }
  },
  actions: {
    dispatchShoe({commit}, payload){
      Axios.get(`/api/check/info/${payload}`)
      .then(response=>{
          console.log(response.data)
          commit('setCheck', response.data)
      })
    },
    dispatchWomensShoes({commit}){
      Axios.get('/api/women/info')
      .then(response=>{
        console.log(response.data)
        commit('setWomensShoes', response.data)
      })
    },
    dispatchTrending({commit}){
      Axios.get('/api/trending/info')
      .then(response=>{
        console.log(response.data)
        commit('setTrending', response.data);
      })
    },
    dispatchStaff({commit}){
      Axios.get('/api/picks/info')
      .then(response=>{
        console.log(response.data)
        commit('setStaff', response.data)
      })
    },
    dispatchMenShoes({commit}){
      Axios.get('/api/men/info')
      .then(response=>{
        console.log(response.data)
        commit('setMensShoes', response.data);
      })
    },
    dispatchLatest({commit}){
      Axios.get('/api/latest/info')
      .then(response=>{
        console.log(response.data)
        commit('setLatest', response.data);
      })
    },
    dispatchClearance({commit}){
      Axios.get('/api/clearance/info')
      .then(response=>{
        console.log(response.data)
        commit('setClearance', response.data);
      })
     },
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

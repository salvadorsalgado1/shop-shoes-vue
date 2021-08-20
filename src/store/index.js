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
    edit:[],
    news:[]

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
    setNews(state, payload){
      state.news = payload;
    }
  },
  actions: {
    setDailyNews({commit}){
      fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&from=2021-08-18&sortBy=publishedAt&apiKey=012173bc4da74432ae2a08a0b1047e09')
       .then(response=>response.json())
       .then(data=>{
          let news = data.articles.splice(0,5); 
          commit('setNews', news);
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

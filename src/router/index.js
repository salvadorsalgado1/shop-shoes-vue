import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Front from '../views/Front.vue'
import Clearance from '../views/Clearance.vue'
import Latest from '../views/Latest.vue'
import MenShoes from '../views/MenShoes.vue'
import StaffPicks from '../views/StaffPicks.vue'
import Trending from '../views/Trending.vue'
import WomenShoes from '../views/WomenShoes.vue'
import Cart from '../views/Cart.vue'
import Shoe from '../views/Shoe.vue'
import Media from '../views/Media.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Front',
    component: Front
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/clearance',
    name: 'Clearance',
    component: Clearance
  },
  {
    path: '/latest-arrivals',
    name: 'Latest',
    component: Latest
  },
  {
    path: '/shoes-for-men',
    name: 'MenShoes',
    component: MenShoes
  },
  {
    path: '/shoes-for-women',
    name: 'WomenShoes',
    component: WomenShoes
  },
  {
    path: '/staff-picks',
    name: 'StaffPicks',
    component: StaffPicks,
    props:true
  },
  {
    path: '/trending',
    name: 'Trending',
    component: Trending
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/shoe',
    name: 'Shoe',
    component: Shoe,
    props:true
  },
  {
    path: '/media',
    name: 'Media',
    component: Media
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my/My.vue'),
    children:[
      {
        path:'login',
        component: () => import('../components/content/login/Login.vue')
      }
    ]
  },
  {
    path:'/search',
    component: () => import('../views/search/Search.vue')
  },
  {
    path:'/detail/:goodsid',
    component:() => import('../views/detail/Detail.vue')
  },
  {
    path:'/cart',
    component:() => import('../views/cart/Cart.vue')
  },
  {
    path:'/pay',
    component:() => import('../views/pay/Pay.vue'),
    children:[
      {
        path:'weChatPayPage',
        component:() => import('../views/weChatPay/WechatPay.vue')
      }
    ]
  },
  {
    path:'/typeGoods/:typeid',
    component:() => import('../views/typegoods/TypeGoods.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

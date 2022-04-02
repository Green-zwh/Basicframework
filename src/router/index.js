import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/about',
    meta: {
      title: '主页',
    },
    children: [{
        path: '/about',
        name: 'About',
        meta: {
          title: '关于我们',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/about.vue'),
      },
      {
        path: '/us',
        name: 'us',
        component: () => import('../views/us.vue'),
        meta: {
          title: '啦啦啦',
        },
      },
      {
        path: '/hi',
        name: 'hi',
        component: () => import('../views/test/hi.vue'),
        meta: {
          title: '嘿嘿',
        },
      },
      {
        path: '/hello',
        name: 'hello',
        component: () => import('../views/test/hello.vue'),
        meta: {
          title: '嘿嘿sdas',
        },
      }

    ]
  },



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
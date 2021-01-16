import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from './pages/Menu/Menu.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/menu', component: Menu},
]

export const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router;
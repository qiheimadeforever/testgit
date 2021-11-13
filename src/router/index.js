import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/views/Home/Home')//路由的懒加载
            },
            {
                path: '/mall',
                name: 'mall',
                component: () => import('@/views/Mall/Mall')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('@/views/User/User')
            },
        ]
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
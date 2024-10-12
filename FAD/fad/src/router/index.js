import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: ()=> Home
        },
        {
            path: '/login',
            component: ()=> import ('../views/Login.vue')
        },
        {
            path: '/signin',
            component: ()=> import ('../views/Signin.vue')
        },
        {
            path: '/history',
            component: ()=> import ('../views/History.vue')
        },
        {
            path: '/tutorial',
            component: ()=> import ('../views/Tutorial.vue')
        },
        {
            path: '/overview',
            component: ()=> import ('../views/Overview.vue')
        }
    ]
})

export default router
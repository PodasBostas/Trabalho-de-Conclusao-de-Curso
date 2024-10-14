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
            path: '/signup',
            component: ()=> import ('../views/Signup.vue')
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
        },
        {
            path: '/overview/languages',
            component: ()=> import ('../views/Languages.vue')
        },
        {
            path: '/overview/frameworks',
            component: ()=> import ('../views/Frameworks.vue')
        },
        {
            path: '/overview/operatingsystems',
            component: ()=> import ('../views/OperatingSystems.vue')
        }
    ]
})

export default router
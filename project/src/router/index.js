import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Upload from '../views/Upload.vue'
import Analysis from '../views/Analysis.vue'
import History from '../views/History.vue'
import Profile from '../views/Profile.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/upload',
        component: Upload
    },
    {
        path: '/analysis',
        component: Analysis
    },
    {
        path: '/history',
        component: History
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },
    {
    path: "/login",
    component: Login
},
{
    path: "/register",
    component: Register
}
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

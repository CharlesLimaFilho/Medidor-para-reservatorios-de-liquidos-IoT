import './assets/main.css'

import { createApp, ref } from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue'
import User from '@/User.vue'
import Login from '@/components/Loginarea.vue'

const routes = [
    {path: '/', name: 'Home', component: Login, meta: { title: 'Login'}},
    {path: '/user/:id', name: 'user', component: User, meta: { title: 'Dispositivos'}},
    //{path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
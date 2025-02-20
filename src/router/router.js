import { createApp, ref } from 'vue'
import { createRouter, createWebHistory } from "vue-router";

import User from '@/User.vue'
import Login from '@/components/Loginarea.vue'
import NewDevice from '@/components/newDevice.vue';

const routes = [
    {path: '/', name: 'Home', component: Login, meta: { title: 'Login'}},
    {path: '/user/:id', name: 'user', component: User, meta: { title: `Dispositivos de `, requiresAuth: true }},
    {path: '/component/newDevice', name: 'newDevice', component: NewDevice}
    //{path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('auth');
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export default router;
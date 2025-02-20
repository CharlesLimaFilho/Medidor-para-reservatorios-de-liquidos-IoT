import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null
    }),
    actions: {
        login(username, password) {
            if (username === 'admin' && password === '1234') {
                this.user = { name: 'Admin'};
                localStorage.setItem('auth', JSON.stringify(this.user));
                return true;
            }
            return false;
        },
        logout() {
            this.user = null;
            localStorage.removeItem('auth');
        }
    }
});
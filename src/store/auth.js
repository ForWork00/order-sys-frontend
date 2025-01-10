import { defineStore } from 'pinia';
import { login } from '@/api/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
  }),
  actions: {
    async loginUser(credentials) {
      try {
        const response = await login(credentials);
        this.token = response.data.token;
        this.user = credentials.username;
        localStorage.setItem('token', this.token);
        alert('登入成功');
      } catch (error) {
        alert(error.response?.data?.message || '登入失敗');
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');
    },
  },
});

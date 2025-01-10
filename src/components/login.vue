<script setup>
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue';

const authStore = useAuthStore();
const username = ref('');
const password = ref('');

const onSubmit = () => {
  authStore.loginUser({ username: username.value, password: password.value });
};
</script>
<template>
    
    <div class="login">
        
      <h2>登入</h2>
      <form @submit.prevent="onSubmit">
        <!-- 用戶名輸入框 -->
        
        <div class="input-container">
            <i class="icon-user"></i>
          <input
            type="text"
            v-model="username"
            placeholder="請輸入用戶名"
            required
          />
        </div>
        <br />
        
        <!-- 密碼輸入框 -->
        <div class="input-container">
          <i class="icon-lock"></i>
          <input
            type="password"
            v-model="password"
            placeholder="請輸入密碼"
            required
          />
        </div>
        <br />
  
        <!-- 登入按鈕 -->
        <button type="submit">登入</button>
      </form>
    </div>
  </template>
  

  
  <style scoped>
  /* 登入表單樣式 */
  .login {
    max-width: 400px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
  }
  
  input {
    width: 100%;
    padding: 10px 40px;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-sizing: border-box;
    font-size: 16px;
    outline: none;
  }
  
  button {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  /* 圖標容器樣式 */
  .input-container {
    position: relative;
  }
  
  .input-container i {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    color: #ccc;
    font-size: 20px;
  }
  
  /* 調整 icon 的大小和顏色 */
  .icon-user {
  background-image: url('@/assets/acc.png');
  width: 20px;
  height: 20px;
  display: inline-block;
  background-size: cover;
}
  
  .icon-lock {
  background-image: url('@/assets/password.png');
  width: 20px;
  height: 20px;
  display: inline-block;
  background-size: cover;
  }
  </style>
<script setup>
import { ref } from 'vue';
import { register } from '@/api/auth';

const username = ref('');
const password = ref('');
const repassword = ref(''); 

const onSubmit = async () => {
// 檢查兩次輸入的密碼是否一致
  if (password.value !== repassword.value) {
    alert('兩次輸入的密碼不一致，請重新輸入');
    return; // 阻止提交
  }
  if( password.value.length < 6 || password.value.length > 12){
    alert('請輸入正確長度的密碼');
    return; // 阻止提交
  }
  try {
    await register({ username: username.value, password: password.value });
    alert('註冊成功，請登入');
  } catch (error) {
    alert(error.response?.data?.message || '註冊失敗');
  }
};
</script>
<template>
    
    <div class="register">
        
      <h2>註冊</h2>
      <form @submit.prevent="onSubmit">
        <!-- 用戶名輸入框 -->
        
        <div class="input-container">
            <i class="icon-user"></i>
          <input
            type="text"
            v-model="username"
            placeholder="請輸入電子郵件"
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
        <div class="input-container">
          <i class="icon-lock"></i>
          <input
            type="repassword"
            v-model="repassword"
            placeholder="請再次輸入密碼"
            required
          />
        </div>
        <br />
        <!-- 註冊按鈕 -->
        <button type="submit">確定註冊</button>
      </form>
    </div>
  </template>
  

  
  <style scoped>
  /* 登入表單樣式 */
  .register {
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
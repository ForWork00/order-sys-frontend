<script setup>
import {  RouterView } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
    // 定義狀態
    const isMenuOpen = ref(false);

    // 切換功能列顯示狀態
    const toggleMenu = (event) => {
      event.stopPropagation(); // 防止事件冒泡
      isMenuOpen.value = !isMenuOpen.value;
    };

    // 關閉功能列
    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    // 點擊外部時關閉功能列
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.dropdown')) {
        closeMenu();
      }
    };
  // 在組件掛載時添加事件監聽器，並在銷毀前移除
  onMounted(() => {
      document.addEventListener('click', handleOutsideClick);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleOutsideClick);
    }); 
  
const gologin=()=>{
  console.log("1")
  router.push({ name: 'login' })
} 
const goregister=()=>{
  router.push({ name: 'register' })
} 
</script>

<template>
  <header>
    <img class="logo" src="@/assets/Logo.jpg" alt="logo" width="40" height="40" />
    <p>Demo</p>
    <div class="dropdown">
      <img @click="toggleMenu" src="@/assets/login.png" class="floatright" alt="login" width="40" height="40" />
        <div v-if="isMenuOpen" class="dropdown-menu">
          <ul>
            <li @click="gologin">登入</li>
            <li @click="goregister">註冊</li>
          </ul>
        </div>
      </div>
    
    
  </header>
  <div class="hotpotimg">
    <img src="@/assets/hotpot.png" alt="" width="100%" height="75%">
  </div>
  <router-view /> 

  <footer>
    <p>© 2025 Demo. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}


.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100px;
  z-index: 1000;
}

.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 10px;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f5f5f5;
}

.floatright{
  margin-left: auto;
 /* 以上是登入功能樣式*/
}
header {
  position: relative;
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header p {
  color: rgb(241, 40, 40);
  font-size: 14px;
  margin-right: 200px;
  
}

 footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center; 
}
</style>

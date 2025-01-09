<script setup>
import {  RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img  class="logo" src="@/assets/Logo.jpg" alt="logo" width="40" height="40" />
    <p>正老林羊肉爐</p>
  </header>
  <div class="hotpotimg">
    <img src="@/assets/hotpot.png" alt="" width="100%" height="75%">
  </div>
  

  <router-view /> 

  

  <footer>
    <p>© 2025 Lamb Hot Pot. All rights reserved.</p>
  </footer>
</template>

<style scoped>
header {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
}
header p {
  color: rgb(241, 40, 40);
  font-size: 14px;
  margin-left: 12px;
  
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

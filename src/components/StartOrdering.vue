<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const goSelectSoup = () => {
  
   router.push({ name: 'soup-base' })
}
</script>


<template>
  <button @click="goSelectSoup">開始點餐</button> 
</template>


<style scoped>
  button {
    background: transparent;
    border: 1px solid #141414;
    outline: none;
    padding: 12px 40px;
    height: 60px;
    border-radius: 100px;
    font-size: 18px;
  }
</style>
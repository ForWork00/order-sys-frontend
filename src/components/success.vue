<script setup>
import {  useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<template>
  <h1>訂單已成功送出</h1>
  <button @click="goHome">回主畫面</button>

</template>

<style scoped>

</style>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { getNextStep, getPreviousStep } from "@/api/stepSwitch.js"
const route = useRoute()
const router = useRouter()

const goToNextStep = () => {
  const nextStepPath = getNextStep(route.path)
  if (nextStepPath) {
    router.push(nextStepPath)
  }
}
</script>


<template>
  <button @click="goToNextStep">開始點餐</button> 
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
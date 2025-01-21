<script setup>
import { ref } from 'vue'
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

const goToPreviousStep = () => {
  const previousStepPath = getPreviousStep(route.path)
  if (previousStepPath) {
    router.push(previousStepPath)
  }
}

</script>

<template>
  <h1>選擇支付方式</h1>

  <div class="step-switch">
    <button @click="goToPreviousStep">上一步</button>
    <button @click="goToNextStep">下一步</button>
  </div>
</template>

<style scoped>
.step-switch {
  display: block;
}
</style>

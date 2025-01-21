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

  const value = ref(0)
  const min = 0
  const max = 1

  const increment = () => {
    if (value.value < max) value.value++
  }

  const decrement = () => {
    if (value.value > min) value.value--
  }
</script>

<template>
  <h1>選擇湯底</h1>
  <!-- 這邊先寫死，之後要打api向後端要湯底資料 -->
  <!-- 第二個湯底 -->
  <div class="soup1">
    <img src="" alt="招牌紅燒湯底">

    <div class="number-input">
      <button class="decrement" @click="decrement">◀</button>
      <input type="number" class="number" :value="value" readonly />
      <button class="increment" @click="increment">▶</button>
    </div>
  </div>
  <!-- 第二個湯底 -->
  <div class="soup2">
    <img src="" alt="麻辣紅燒湯底">

    <div class="number-input">
      <button class="decrement" @click="decrement">◀</button>
      <input type="number" class="number" :value="value" readonly />
      <button class="increment" @click="increment">▶</button>
    </div>
  </div>
  <!-- 第三個湯底 -->
  <div class="soup3">
    <img src="" alt="清燉蔬菜湯底">

    <div class="number-input">
      <button class="decrement" @click="decrement">◀</button>
      <input type="number" class="number" :value="value" readonly />
      <button class="increment" @click="increment">▶</button>
    </div>
  </div>
  <!-- 下一步或是上一步 -->
  <div class="step-switch">
    <button @click="goToPreviousStep">上一步</button>
    <button @click="goToNextStep">下一步</button>
  </div>


</template>

<style scoped>
.step-switch{
  display: block;
}
.number-input {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  
}

.number-input input {
  width: 33px;
  text-align: center;
  border: none;
  font-size: 16px;
}

.number-input button {
  background: none;
  border: 1px solid #ccc;
  padding: 5px;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}

.number-input button:hover {
  background-color: #f0f0f0;
}

</style>

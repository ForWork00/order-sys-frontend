import { flowSteps } from "./flowstepConfig"

// 根據當前路徑取得下一步的路由
export function getNextStep(currentPath) {
  const currentIndex = flowSteps.findIndex(step => step.path === currentPath)
  return currentIndex !== -1 && currentIndex < flowSteps.length - 1
    ? flowSteps[currentIndex + 1].path
    : null
}

// 根據當前路徑取得上一步的路由
export function getPreviousStep(currentPath) {
  const currentIndex = flowSteps.findIndex(step => step.path === currentPath)
  return currentIndex > 0 ? flowSteps[currentIndex - 1].path : null
}


import { createRouter, createWebHistory } from 'vue-router'

// 配置相关的路由信息
const routes = []

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

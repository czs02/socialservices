<template>
  <div>
    <!-- 菜单栏  -->
    <el-menu style="border: none;" 
    default-active="/" 
    background-color="#001529" 
    text-color="rgba(255, 255, 255, 0.65)"
    active-text-color="#fff" 
        class="el-menu-vertical-demo"

    v-for="item in menulist" :key="item">
      <el-menu-item>{{ item.name }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
const data = reactive({
  menulist: [
    {
      path: '/',
      name: '會員管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/',
      name: '活動管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/',
      name: '義工管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/',
      name: '捐助管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/',
      name: '個案管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/',
      name: '計劃管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/',
      name: '職員管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/',
      name: '財務管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/',
      name: '報表和統計',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/',
      name: '用戶權限管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },

  ],
})
const { menulist } = toRefs(data);
</script>

<style scoped></style>
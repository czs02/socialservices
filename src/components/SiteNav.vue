<template>
  <div>
    <!-- 侧边菜单栏  -->
    <el-menu style="border: none;" 
    background-color="#001529" 
    text-color="rgba(255, 255, 255, 0.65)"
    active-text-color="#fff" 
    active-background-color="#020912"
    class="el-menu-vertical-demo"
    default-active="/"
    @open="handleOpen"
    @close="handleClose"
    router
    >
      <el-menu-item v-for="item in menulist" :key="item.path" :index="item.path" >
        {{ item.name }}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
const data = reactive({
  menulist: [
    {
      path: '/mms/vip',
      name: '會員管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/ams/activity',
      name: '活動管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/vms/volunteer/',
      name: '義工管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/dms/donor',
      name: '捐助管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/cms/case',
      name: '個案管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/pms/plan',
      name: '計劃管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/sms/staff',
      name: '職員管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/fms/financial',
      name: '財務管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/rms/reportCount',
      name: '報表和統計',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },
    {
      path: '/rbac/permission',
      name: '用戶權限管理',
      icon: 'el-icon-menu',
      // component: () => import('@/views/Home.vue')
    },

  ],
})
const { menulist } = toRefs(data);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
::v-deep .el-menu-item.is-active {
  border-left: 3px solid #1261f1; /* 左边框蓝色 3px，可根据需要调整为 1px */
  padding-top: 6px;
  padding-bottom: 6px;
  background-color: #020912 !important; /* 保持背景色一致 */
}
</style>
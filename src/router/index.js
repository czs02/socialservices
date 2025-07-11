import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/', // 访问路径
    name: 'home',
    component: ()=>import('@/views/HomeView.vue'), // 对应组件
    redirect: '/mms/vip', 
    children: [
      {
        path: '/mms/vip',
        name: 'vip',
        component: ()=>import('@/views/mms/VipPage.vue'),
      },
      {
        path: '/ams/activity',
        name: 'activity',
        component: ()=>import('@/views/ams/ActivityPage.vue'),
      },
      {
        path: '/vms/volunteer',
        name: 'volunteer',
        component: ()=>import('@/views/vms/VolunteerPage.vue'),
      },
      {
        path: '/rms/reportCount',
        name: 'reportCount',
        component: ()=>import('@/views/rms/ReportCountPage.vue'),
      },
      {
        path: '/sms/staff',
        name: 'staff',
        component: ()=>import('@/views/sms/StaffPage.vue'),
      },
      {
        path: '/rbac/permission',
        name: 'permission',
        component: ()=>import('@/views/rbac/PermissionPage.vue'),
      },
      {
        path: '/pms/plan',
        name: 'plan',
        component: ()=>import('@/views/pms/PlanPage.vue'),
      },
      {
        path: '/fms/financial',
        name: 'financial',
        component: ()=>import('@/views/fms/FinancialPage.vue'),
      },
      {
        path: '/dms/donor',
        name: 'donor',
        component: ()=>import('@/views/dms/DonorPage.vue'),
      },
      {
        path: '/cms/case',
        name: 'case',
        component: ()=>import('@/views/cms/CasePage.vue'),
      },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
<template>
  <div class="common-layout">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside>
        <!-- 命名系统 -->
        <p
          style=" height: 60px;  display: flex;align-items: center;justify-content: center;color:rgba(255, 255, 255, 0.65);">
          自助組織CRM系統</p>
        <!--导航  -->
        <Nav></Nav>

      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header style="height: 60px; display: flex;align-items: center;justify-content: right;">
          <el-dropdown placement="bottom">
            <img src="@/assets/logo.png" alt="" width="40px" style="ascent-override: none;">
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>個人信息</el-dropdown-item>
                <el-dropdown-item>修改密碼</el-dropdown-item>
                <el-dropdown-item>退出登錄</el-dropdown-item>
              </el-dropdown-menu>
            </template>

          </el-dropdown>
          <div style="display: flex;flex-direction: column;align-items: flex-end; justify-content: center;">
            <span>name</span>
            <el-tag type="primary" size="small">管理員</el-tag>
          </div>

        </el-header>
        <!-- 主题 -->
        <el-main >
          <!-- 路由展示 -->
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>

// import { onMounted, ref } from 'vue';
//引入组件
import Nav from '@/components/SiteNav.vue';

// const showMain = ref(false);

// onMounted(() => {
//   setTimeout(() => {
//     showMain.value = true;
//   }, 50); // 延迟 50ms 加载主体内容
// });


</script>

<style>
/* 侧边栏 */
.el-aside {
  width: 200px;
  height: calc(100vh - 20px);
  background-color: #001529;
  box-shadow: 2px 0 6px 0 rgba(0, 21, 41, 0.35);
}

/* 主体 */
.el-main {
  --el-main-padding: 0px;
}


.demo-pagination-block+.demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
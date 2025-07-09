<template>
  <div class="common-layout">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside>
        <!-- 命名系统 -->
        <p
          style=" height: 60px;  display: flex;align-items: center;justify-content: center;color:rgba(255, 255, 255, 0.65);">
          自助組織CRM系統</p>
        <Nav />
       
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
        <el-main v-if="showMain">
          <!-- tap切换栏 -->
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="會員資料登記和更新" name="first"
              style="padding:20px 30px 20px 30px; height: calc(100vh - 160px);background-color: #edf0f8;">
              <!-- 搜索+添加 -->
              <el-form :inline="true" :model="formInline" class="demo-form-inline"
                style="background-color: #fff; height: 60px; border-radius: 10px;display: flex;align-items: center;justify-content: center;">
                <el-form-item label="姓名">
                  <el-input v-model="formInline.user" placeholder="请输入會員姓名" clearable />
                </el-form-item>
                <el-form-item label="性別">
                  <el-select v-model="formInline.region" clearable placeholder="請選擇" style="width: 200px">
                    <el-option label="男" :value=0 />
                    <el-option label="女" :value=1 />
                  </el-select>
                </el-form-item>
                <el-form-item label="加入日期">
                  <el-date-picker v-model="formInline.date" type="date" placeholder="Pick a date" clearable />
                </el-form-item>
                <el-form-item label="類型">
                  <el-select v-model="formInline.region" clearable placeholder="請選擇" style="width: 200px">
                    <el-option label="男" :value=0 />
                    <el-option label="女" :value=1 />
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">搜索</el-button>
                </el-form-item>
              </el-form>
              <!-- 数据展示表格 -->
              <el-table :data="tableData"
                style="width: 100%;height: calc(100vh - 240px); border-radius: 10px;margin-top: 20px; ">
                <el-table-column type="selection" width="55" />
                <el-table-column label="Date" width="120">
                  <template #default="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column property="name" label="Name" width="120" />
                <el-table-column property="address" label="use show-overflow-tooltip" width="240"
                  show-overflow-tooltip />
                <el-table-column property="address" label="address" />
              </el-table>
              <!-- 分頁 -->
              <el-pagination style="margin-bottom: 50px;position: relative;bottom: 50px;"
                v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]"
                :size="size" :disabled="disabled" :background="background"
                layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
            </el-tab-pane>
            <el-tab-pane label="會員分類" name="second">Config</el-tab-pane>
            <el-tab-pane label="會員曆史記錄" name="third">Role</el-tab-pane>
            <el-tab-pane label="會員充值" name="fourth">Task</el-tab-pane>
            <el-tab-pane label="充值收錄模版" name="fifth">充值收錄模版</el-tab-pane>
            <el-tab-pane label="會員開懷計劃" name="sixth">會員開懷計劃</el-tab-pane>
          </el-tabs>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>

import { onMounted, reactive, toRefs, ref } from 'vue';
//引入组件
import Nav from '@/components/SiteNav.vue';

const showMain = ref(false);


// import  { ComponentSize } from 'element-plus';
const size = ref('default')
const currentPage4 = ref(4)
const pageSize4 = ref(100)

const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}


onMounted(() => {
  setTimeout(() => {
    showMain.value = true;
  }, 50); // 延迟 50ms 加载主体内容
});
const data = reactive({
  formInline: {
    user: '',
    region: '',
    date: '',
  },
  tableData: [
    {
      date: '2016-05-04',
      name: 'Aleyna Kutzner',
      address: 'Lohrbergstr. 86c, Süd Lilli, Saarland',
    },
    {
      date: '2016-05-03',
      name: 'Helen Jacobi',
      address: '760 A Street, South Frankfield, Illinois',
    },
    {
      date: '2016-05-02',
      name: 'Brandon Deckert',
      address: 'Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen',
    },
    {
      date: '2016-05-01',
      name: 'Margie Smith',
      address: '23618 Windsor Drive, West Ricardoview, Idaho',
    },
  ],
  rules: {
  }
})
const { formInline, tableData } = toRefs(data);
// 搜索点击事件
const onSubmit = () => {
  console.log('submit!')
}
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

.el-tabs {
  width: 100%;
}

.demo-tabs>.el-tabs__header {
  background-color: #f6f6f6;
  margin: 0;
}

.el-tabs__nav-wrap {
  padding-left: 50px;
}

.el-table th.el-table__cell {
  background-color: #e7e7e7 !important;
  color: #333 !important;
}

.demo-tabs>.el-tabs__header>.el-tabs__item {
  color: #727272 !important;
}

.demo-pagination-block+.demo-pagination-block {
  margin-top: 10px;
}

.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
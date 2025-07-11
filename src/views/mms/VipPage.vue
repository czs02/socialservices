<template>
    <div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="會員資料登記和更新" name="first"
                class="change-tabs">
              <OneTab></OneTab>
            </el-tab-pane>
            <el-tab-pane label="會員分類" name="second"  class="change-tabs">
                <TwoTab></TwoTab>
            </el-tab-pane>
            <el-tab-pane label="會員曆史記錄" name="third" class="change-tabs">
                <ThreeTab></ThreeTab>
            </el-tab-pane>
            <el-tab-pane label="會員充值" name="fourth" class="change-tabs">
                <FourTab></FourTab>
            </el-tab-pane>
            <el-tab-pane label="充值收錄模版" name="fifth" class="change-tabs">充值收錄模版</el-tab-pane>
            <el-tab-pane label="會員開懷計劃" name="sixth" class="change-tabs">
                <SixTab></SixTab>
            </el-tab-pane>
        </el-tabs>
    </div>
    <!-- 会员管理 -->

</template>

<script setup>
import OneTab from './components/OneTab.vue';
import TwoTab from './components/TwoTab.vue';
import ThreeTab from './components/ThreeTab.vue';
import FourTab from './components/FourTab.vue';
import SixTab from './components/SixTab.vue';
import {ref} from 'vue';
const activeName = ref('first');
</script>
<style>
/* 搜索 */

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


.demo-tabs>.el-tabs__header>.el-tabs__item {
    color: #727272 !important;
}
.change-tabs{
    padding:20px 30px 20px 30px; 
    height: calc(100vh - 160px);
    background-color: #edf0f8;
}
</style>
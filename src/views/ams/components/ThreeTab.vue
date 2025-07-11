<template>
    <!-- 搜索+添加 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline1">
        <el-form-item label="名稱">
            <el-input v-model="formInline.user" placeholder="请输入會員姓名" clearable />
        </el-form-item>
        <el-form-item label="類型">
            <el-select v-model="formInline.region" clearable placeholder="請選擇" style="width: 100px">
                <el-option label="男" :value=0 />
                <el-option label="女" :value=1 />
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
            <!-- <el-button type="success" @click="onAdd">新增</el-button> -->
        </el-form-item>
    </el-form>
    <!-- 数据展示表格 -->
    <el-table :data="tableData" style="width: 100%;height: calc(100vh - 255px); border-radius: 10px;margin-top: 20px; ">
        <el-table-column type="selection" width="55" />
        <el-table-column property="name" label="活動名稱" width="100" />
        <el-table-column property="name" label="類型" />
           
        <el-table-column property="name" label="活動時間" />
        <el-table-column property="name" label="活動地點" />
        <el-table-column property="name" label="活動節數" />
        <el-table-column property="name" label="詳細內容" />
        <el-table-column property="name" label="參與者名單" />
        <el-table-column property="name" label="狀態" />
        <el-table-column label="操作" align="center" class-name="small-padding fixed-width" width="150">
            <template #default="scope">
                <el-button link type="primary" icon="Edit" @click="handleUpdate(scope.row)">修改</el-button>
                <el-button link type="primary" icon="Delete" @click="handleDelete(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <!-- 分頁 -->
    <el-pagination style="margin-bottom: 50px;position: relative;bottom: 50px;" v-model:current-page="currentPage4"
        v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]" :size="size" :disabled="disabled"
        :background="background" layout="total, sizes, prev, pager, next, jumper" :total="400"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />

    <el-drawer
    v-model="open"
    title="修改"
    :direction="direction"
    :before-close="handleClose"
  >
      <!-- <h3 style="color: #333;border-left:4px solid #5393f4; padding-left: 8px; margin-bottom: 35px;margin-top: -4px;">新增會員</h3> -->
       <div style="height: calc(100vh - 147px); padding-right: 20px;box-sizing: border-box;">     
      <el-form label-position="right" label-width="70px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="活動名稱" >
              <el-input placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="類型" >
              <el-input placeholder="请输入" />
            </el-form-item>
          </el-col>
        </el-row>
        
        <el-row>
          <el-col :span="12">
            <el-form-item label="活動時間" >
              <el-input placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="活動地點" >
              <el-input placeholder="请输入" />
            </el-form-item>
          </el-col>
        </el-row>
  <el-row>
          <el-col :span="12">
            <el-form-item label="活動節數" >
              <el-input placeholder="请输入" />
            </el-form-item>
          </el-col>
        </el-row>
          <el-row>
          <el-col :span="24">
            <el-form-item label="活動內容" >
              <el-input placeholder="请输入" type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>
         <el-row>
          <el-col :span="24">
            <el-form-item label="參加名單" >
              <el-input placeholder="请输入" type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>
         <el-row>
          <el-col :span="24">
            <el-form-item label="狀態" >
              <el-input placeholder="请输入" type="textarea"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      </div>
      <el-button color="#4a619b" style="width: 100%;position: relative;bottom: 0;">完成</el-button>
  </el-drawer>
 
</template>

<script  setup>
import { ref, reactive, toRefs } from 'vue'
const open = ref(false)
import { ElMessageBox } from 'element-plus'
const size = ref('default')
const currentPage4 = ref(4)
const pageSize4 = ref(100)

const background = ref(false)
const disabled = ref(false)
const direction = ref('rtl')
const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}
const data = reactive({
    formInline: {
        user: '',
        region: '',
        date: '',
    },
    tableData: [
        {
            date: '2016-05-04',
            name: 'Aleynar',
            address: 'Lohrbergstr. 86',
        },
        {
            date: '2016-05-03',
            name: 'Helen',
            address: '760 A Street',
        },
        {
            date: '2016-05-02',
            name: 'Brando',
            address: 'Arnold-Ohletz-Str. 41a,',
        },
        {
            date: '2016-05-01',
            name: 'Margie',
            address: '23618 Windsor Drive, ',
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
// 增加
// const onAdd = () => {
//     console.log('add!');
//     open.value = true;
// }
// 修改
const handleUpdate = (row) => {
    open.value = true;
    console.log('update!', row)
}
// 删除
const handleDelete = (row) => {
    console.log('delete!', row)
}
// 关闭抽屉
const handleClose = (done) => {
  ElMessageBox.confirm('确认关闭该页面吗？')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>

<style scoped>
.demo-form-inline1 {
    background-color: #fff;
    height: 80px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: left;
}

.el-form-item {
    margin-bottom: 0;
}
.demo-form-inline1 .el-form-item {
    margin-left: 20px;
}
.el-table th.el-table__cell {
    background-color: #e7e7e7 !important;
    color: #333 !important;
}

.el-row{
   margin-bottom: 13px;
}
.el-drawer__body{ 
    padding: 0;
}
</style>
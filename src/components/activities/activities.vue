<template>
  <div class="activities">
    <el-row>
      <el-col :span="4" class="sideMenu">
        <el-menu default-active="/main/activities" class="el-menu-vertical-demo" router>
          <el-menu-item index="/main/activities"><i class="el-icon-menu"></i>活动列表</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" :offset="4" class="mainContent">
        <el-table :data="activityList" border stripe style="width: 100%">
          <el-table-column type="selection" width="100"></el-table-column>
          <el-table-column prop="name" label="场地名" min-width="300" inline-template>
            <el-popover trigger="hover" placement="top">
              <div class="hoverStyle">
                <p>地址: {{ row.address }}</p>
                <p>面积: {{ row.area }} 平方米</p>
                <p>录入时间: {{ row.time }}</p>
              </div>
              <div slot="reference" class="name-wrapper">
                <el-tag>{{ row.name }}</el-tag>
              </div>
            </el-popover>
          </el-table-column>
          <el-table-column prop="city" label="地区" width="100"></el-table-column>
          <el-table-column prop="zip" label="权重" sortable width="100"></el-table-column>
          <el-table-column prop="state" label="状态" width="100" sortable></el-table-column>
          <el-table-column label="操作" :span="2" :context="_self" inline-template min-width="150">
            <div>
              <el-button size="small" @click="handleEdit($index, row)">查看</el-button>
              <el-button size="small" type="danger" @click="deletePlace">删除</el-button>
            </div>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activityList: [{
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          zip: 20033,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20,
          state: 'bu通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 140,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 2003331,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 100,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20033,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 2003332,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 100,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20033,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 2003332,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 100,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20033,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 2003332,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 100,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 20033,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          state: '通过'
        }, {
          name: '思南公馆思南公馆思南公馆思南公馆',
          time: '2016-05-03',
          area: '1000',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 2003332,
          state: '通过'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
      deletePlace() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>
<style>


</style>

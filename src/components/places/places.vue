<template>
  <div class="places">
    <el-row>
      <el-col :span="4" class="sideMenu">
        <el-menu default-active="/main/places" class="el-menu-vertical-demo" router>
          <el-menu-item index="/main/places"><i class="el-icon-menu"></i>场地列表</el-menu-item>
          <el-menu-item index="/main/newPlace"><i class="el-icon-plus"></i>新增场地</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" :offset="4" class="mainContent">
        <el-table :data="placeList" border stripe style="width: 100%">
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
              <el-button size="small" :plain="true" type="default" @click="handleEdit($index, row)" icon="document" title="查看"></el-button>
              <el-button size="small" :plain="true" type="warning" @click="deletePlace" icon="delete" title="删除"></el-button>
            </div>
          </el-table-column>
        </el-table>
        <el-col :span="12" :offset="12" style="marign-top: 20px;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]"
            :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
          </el-pagination>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        placeList: [{
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
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
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
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        this.currentPage = val
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>
<style>
  .hoverStyle>p {
    margin-bottom: 15px;
  }

</style>

<template>
  <div class="systems">
    <el-row>
      <el-col :span="4" class="sideMenu">
        <el-menu default-active="/main/users" class="el-menu-vertical-demo" router>
          <el-menu-item index="/main/users"><i class="el-icon-menu"></i>管理列表</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" :offset="4" class="mainContent">
        systems
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  
</style>
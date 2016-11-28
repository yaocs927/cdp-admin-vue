<template>
  <div class="adminmain">
    <el-row>
      <el-col :span="4">
        <el-menu theme="dark" default-active="/main/places" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item class="logo" index="/main/places">CDP</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-menu theme="dark" default-active="/main/places" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/main/places">场地管理</el-menu-item>
          <el-menu-item index="/main/activities">活动管理</el-menu-item>
          <el-menu-item index="/main/users">用户管理</el-menu-item>
          <el-menu-item index="/main/systems">系统管理</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group title="分组一">
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
  </div>
  </el-row>
</template>
<script>
  export default {}
</script>
<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  
  .logo {
    display: inline-block;
    text-align: center;
  }
  
  .el-menu {
    border-radius: 0 !important;
  }

</style>

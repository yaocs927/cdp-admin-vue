<template>
  <div class="adminmain">
    <el-row class="topMenu">
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
      <el-col :span="4" class="sideMenu">
        <el-menu default-active="/main/places" class="el-menu-vertical-demo" router>
          <el-menu-item index="/main/places"><i class="el-icon-menu"></i>场地列表</el-menu-item>
          <el-menu-item index="/main/newPlace"><i class="el-icon-menu"></i>新增场地</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" :offset="4" class="mainContent">
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
  
  .topMenu {
    position: fixed;
    z-index: 999;
    width: 100%;
  }

  .sideMenu {
    position: fixed;
    top: 60px;
    height: 100%;
    background-color: #eff2f7;
  }

  .mainContent {
    margin-top: 60px;
    padding: 20px;
  }
</style>
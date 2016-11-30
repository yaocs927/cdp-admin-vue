<template>
  <div class="adminmain">
    <el-row class="topMenu">
      <el-col :span="4">
        <el-menu theme="dark" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item class="logo" index="/main/homepage">场地派后台管理系统</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <el-menu theme="dark" default-active="/main/homepage" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/main/homepage">首页</el-menu-item>
          <el-menu-item index="/main/places">场地管理</el-menu-item>
          <el-menu-item index="/main/activities">活动管理</el-menu-item>
          <el-menu-item index="/main/users">用户管理</el-menu-item>
          <el-menu-item index="/main/systems">系统管理</el-menu-item>
          <el-menu-item index="/main/systems" >退出</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
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
    padding: 20px 20px 60px;

  }

</style>

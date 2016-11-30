<template>
  <div class="newPlace">
    <el-row>
      <el-col :span="4" class="sideMenu">
        <el-menu default-active="/main/newPlace" class="el-menu-vertical-demo" router>
          <el-menu-item index="/main/places"><i class="el-icon-menu"></i>场地列表</el-menu-item>
          <el-menu-item index="/main/newPlace"><i class="el-icon-plus"></i>新增场地</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" :offset="4" class="mainContent">
        <el-col :span="16" :offset="4">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="场地名">
              <el-input v-model="form.name" placeholder="请填写场地名"></el-input>
            </el-form-item>
            <el-form-item label="场地位置">
              <el-row type="flex" class="row-bg" justify="space-between">
                <el-col :span="7">
                  <el-select v-model="form.region" placeholder="城市">
                    <el-option label="shanghai" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="7">
                  <el-select v-model="form.region1" placeholder="区/县">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="7">
                  <el-select v-model="form.region2" placeholder="商圈">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-input v-model="form.address" placeholder="请填写详细地址"></el-input>
            </el-form-item>
            <el-form-item label="场地简介">
              <el-input type="textarea" v-model="form.desc" placeholder="请填写场地简介"></el-input>
            </el-form-item>
            <el-form-item label="场地类型">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="场地类型">
              <el-checkbox-group v-model="form.type1">
                <el-checkbox label="美食/餐厅线上活动" name="type1"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type1"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type1"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="价格模式">
              <el-col :span="4">
                <el-input v-model="form.priceType"></el-input>
              </el-col>
              <el-col :span="19" :offset="1">
                <el-input v-model="form.price"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="场地图片">
              <el-upload action="//jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :default-file-list="fileList"
                :multiple="true">
                <el-button size="small" type="primary">点击上传</el-button>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          region1: '',
          region2: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          type1: [],
          resource: '',
          desc: '',
          priceType: '',
          price: ''
        },
        fileList: []
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!')
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
      },
      handlePreview(file) {
        console.log(file)
      }
    }
  }
</script>
<style>


</style>

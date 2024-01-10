<template>
  <div>
    <el-descriptions title="" :column="1" border>
      <el-descriptions-item label="通知类型：">
        <template>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-descriptions-item>
      <el-descriptions-item label="通知内容：">
        <template>
          <el-input type="textarea" :rows="2" placeholder="请输入内容" style="width: 70%;">
          </el-input>
        </template>
      </el-descriptions-item>
      <el-descriptions-item label="接收用户：">
        <template>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"
            class="checkbox">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
          </el-checkbox-group>
        </template>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
<script src="">
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  data() {
    return {
      options: [{
        value: '合同签订',
        label: '合同签订'
      }],
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
}
</script>
<style lang="scss" scoped>
.checkbox {
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  background-color: gainsboro;
}
</style>
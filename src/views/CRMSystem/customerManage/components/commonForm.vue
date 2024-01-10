<template>
  <div>
    <el-form ref="form" :model="form" label-width="120px" size="small">
      <el-row :gutter="20">
        <el-col :span="12">
          <div>
            <el-form-item label="客户类型:">
              <el-radio-group v-model="form.isMedical">
                <el-radio label="医疗机构"></el-radio>
                <el-radio label="非医疗机构"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="联系电话:">
              <el-input style="width: 100%;" v-model="form.lxdh"></el-input>
            </el-form-item>
            <el-form-item label="所属省市区:">
              <el-row type="flex" justify="space-between">
                <el-col :span="7">
                  <!-- 省份选择 -->
                  <el-select v-model="form.province" placeholder="请选择省份">
                    <el-option label="省份1" value="省份1"></el-option>
                    <el-option label="省份2" value="省份2"></el-option>
                    <!-- 其他省份选项 -->
                  </el-select>
                </el-col>
                <el-col :span="7">
                  <!-- 城市选择 -->
                  <el-select v-model="form.city" placeholder="请选择城市">
                    <el-option v-for="city in cities" :key="city" :label="city" :value="city"></el-option>
                  </el-select>
                </el-col>
                <el-col :span="7">
                  <!-- 区选择 -->
                  <el-select v-model="form.district" placeholder="请选择区">
                    <el-option v-for="district in districts" :key="district" :label="district"
                      :value="district"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="统一社会信用代码:">
              <el-input style="width: 100%;" v-model="form.tyshxydm"></el-input>
            </el-form-item>
            <el-form-item label="开票电话:">
              <el-input style="width: 100%;" v-model="form.kpdh"></el-input>
            </el-form-item>
            <el-form-item label="联系人部门:">
              <el-input style="width: 100%;" v-model="form.lxrbm"></el-input>
            </el-form-item>
            <el-form-item v-if="form.isMedical === '医疗机构'" label=" 负责人电话:">
              <el-input style="width: 100%;" v-model="form.fzrdh"></el-input>
            </el-form-item>
            <el-form-item label="备注:">
              <el-input style="width: 100%;" v-model="form.bz"></el-input>
            </el-form-item>
            <el-form-item label="医疗机构执业许可证:" label-width="150px">
              <el-upload class="upload-demo" action="http://123.57.56.30:8080/system/info/add" multiple>
                <i class="el-icon-upload2" style="font-size: 35px; color: #1890ff; font-weight: 600;"></i>
              </el-upload>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div>
            <el-form-item v-if="form.isMedical === '医疗机构'" label="医疗机构名称:">
              <el-input style="width: 100%;" v-model="form.yljgmc">
                <template slot="append">
                  <i class="el-icon-search" @click="handleSearchClick"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item v-if="form.isMedical === '非医疗机构'" label="客户名称:">
              <el-input style="width: 100%;" v-model="form.khmc">
                <template slot="append">
                  <i class="el-icon-search" @click="handleSearchClick"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item v-if="form.isMedical === '医疗机构'" label=" 医院等级:">
              <el-select style="width: 100%;" v-model="form.yydj">
                <el-option label="三级甲等" value="三级甲等"></el-option>
                <el-option label="设备标签" value="设备标签"></el-option>
                <el-option label="三级乙等" value="三级乙等"></el-option>
                <el-option label="二级甲等" value="二级甲等"></el-option>
                <el-option label="二级乙等" value="二级乙等"></el-option>
                <el-option label="一级甲等" value="一级甲等"></el-option>
                <el-option label="无" value="无"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item v-if="form.isMedical === '非医疗机构'" label="企业分类:">
              <el-select style="width: 100%;" v-model="form.qyfl">
                <el-option label="非医疗器械经营企业" value="非医疗器械经营企业"></el-option>
                <el-option label="医疗器械经营企业" value="医疗器械经营企业"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="详细地址:">
              <el-input style="width: 100%;" v-model="form.xxdz"></el-input>
            </el-form-item>
            <el-form-item label="开票地址:">
              <el-input style="width: 100%;" v-model="form.kpdz"></el-input>
            </el-form-item>
            <el-form-item label="联系人:">
              <el-input style="width: 100%;" v-model="form.lxr"></el-input>
            </el-form-item>
            <el-form-item label="账期(月):">
              <el-input style="width: 100%;" v-model="form.zq"></el-input>
            </el-form-item>
            <el-form-item v-if="form.isMedical === '医疗机构'" label="场地负责人:">
              <el-input style="width: 100%;" v-model="form.cdfzr"></el-input>
            </el-form-item>
            <el-form-item v-if="form.isMedical === '医疗机构'" label="驻场工程师:">
              <el-input style="width: 100%;" v-model="form.zcgcs"></el-input>
            </el-form-item>
            <el-form-item label="有效期限:">
              <el-date-picker v-model="form.xxdz" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
          </div>
        </el-col>
      </el-row>

      <el-tag class="dialog-tag">账户信息</el-tag>
      <el-button type="primary" plain size="small" @click="addAccount">新增</el-button>
      <el-table :data="form.accountInfo" style="width: 100%;margin-bottom: 20px;">
        <el-table-column type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column label="开户银行">
          <template slot-scope="scope">
            <el-input v-model="scope.row.khyh" size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="银行账号">
          <template slot-scope="scope">
            <el-input v-model="scope.row.yhzh" size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="账户类型">
          <template slot-scope="scope">
            <el-input v-model="scope.row.zhlx" size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="是否默认">
          <template slot-scope="scope">
            <el-radio v-model="scope.row.isDefault" :label="true" @change="handleRadioChange(scope.row)">是</el-radio>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="80">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, form.accountInfo)" type="text" size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "commonForm",
  props: ["editList"],
  data() {
    return {
      form: {
        yljgmc: '',
        khmc: '',
        isMedical: '医疗机构',
        yydj: '三级甲等',
        city: '',     // 选择的城市
        district: '', // 选择的区
        qyfl: '非医疗器械经营企业',
        accountInfo: [
          { khyh: 'khyh A', yhzh: '123456789', zhlx: 'Type A', isDefault: true },
          { khyh: 'khyh B', yhzh: '987654321', zhlx: 'Type B', isDefault: false },
        ],
      },

      cities: [],     // 城市数据源
      districts: [],  // 区数据源

    }
  },
  created() {
    // console.log('111111111', this.form.isMedical);
    // console.log(this.editList)
    // if (this.editList) {
    //   this.form = JSON.parse(JSON.stringify(this.editList))
    //   // console.log(this.form,'form')
    // } else {
    //   this.form = {

    //   }
    // }
  },
  watch: {
    'form.isMedical'(nerVal, old) {
      this.form.yljgmc = ''
      this.form.khmc = ''
    }

  },
  methods: {
    // 账户信息
    addAccount() {
      const obj = {
        khyh: '', yhzh: '', zhlx: '', isDefault: false
      }
      this.form.accountInfo.push(obj)
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleRadioChange(selectedRow) {
      // 取消其他行的选择状态
      this.form.accountInfo.forEach(row => {
        if (row !== selectedRow) {
          row.isDefault = false;
        }
      });
    },
    handleSearchClick() {
      console.log(this.form.yljgmc || this.form.khmc);
      const cookies = document.cookie;
      const cookieArray = cookies.split('=')[1];
      console.log(cookieArray);

      const apiEndpoint = "https://api.qichacha.com/NameSearch/GetList";
      const apiKey = "95655753dd994935a5f032c2ebd87d02";  // 替换为你的实际App Key
      const searchName = this.form.yljgmc || this.form.khmc;  // 替换为你要搜索的公司名称

      // 构建请求URL
      const apiUrl = `${apiEndpoint}?key=${apiKey}&searchName=${searchName}`;

      // 定义请求头
      const headers = {
        'Token': cookieArray,  // 替换为你的实际Token
        'Timespan': 2000  // 替换为你的实际Timespan
      };

      // 发起GET请求
      axios.get(apiUrl,
        {
          headers
        }
      ).then(response => {
        // 在这里处理从接口返回的数据
        console.log(response.data);
      })
        .catch(error => {
          // 在这里处理请求错误
          console.error('Error:', error);
        });
      // 处理搜索图标点击事件的逻辑
      console.log('Search icon clicked!');
      // 可以在这里执行搜索操作或其他相关逻辑
    },
  }
}
</script>

<style scoped lang="scss">
.dialog-tag {
  display: inline-block;
  margin: 10px 5px 5px 0;
}

::v-deep .el-icon-search {
  cursor: pointer;
  font-size: 16px;
  color: black;
  background-color: #FFF;
}

::v-deep .el-form-item__label {
  font-size: 13px;
  font-weight: 500;
}

::v-deep .el-form-item {
  margin-bottom: 8px;
}
</style>

<template>
  <div class="box">
    <div class="structure">
      <el-table :data="structure" style="width: 100%" border>
        <el-table-column width="140">
          <template slot="header" slot-scope="scope">
            <span>职位序列</span>
            <el-button type="primary" plain size="small" @click="addData1" circle style="margin-left: 10px;">
              <i class="el-icon-plus"></i>
            </el-button>
          </template>
          <template slot-scope="scope">
            <div style=" text-align: center; margin: 5px 10px;">
              <el-input v-model="scope.row.zwxl" placeholder="描述"></el-input>
              <el-button type="primary" plain size="small" @click="addData2(scope.row)" circle>
                <i class="el-icon-plus"></i>
              </el-button>
              <el-button type="danger" plain size="small" @click="deleteData1(scope.$index)" circle
                style="margin: 5px 10px;">
                <i class="el-icon-delete"></i>
              </el-button>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="序号" width="70">
          <template slot-scope="scope">
            <el-table :data="scope.row.structure2" :show-header="false">
              <el-table-column label="序号" type="index">
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>

        <el-table-column label="职级" width="120">
          <template slot-scope="scope">
            <el-table :data="scope.row.structure2" :show-header="false">
              <el-table-column prop="zj">
                <template slot-scope="subScope">
                  <el-input v-model="subScope.row.zj" size="small"></el-input>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>

        <el-table-column label="最高值" width="120">
          <template slot-scope="scope">
            <el-table :data="scope.row.structure2" :show-header="false">
              <el-table-column prop="zgz">
                <template slot-scope="subScope">
                  <el-input v-model="subScope.row.zgz" size="small"></el-input>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>

        <el-table-column label="中位值" width="120">
          <template slot-scope="scope">
            <el-table :data="scope.row.structure2" :show-header="false">
              <el-table-column prop="zwz">
                <template slot-scope="subScope">
                  <el-input v-model="subScope.row.zwz" size="small"></el-input>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>

        <el-table-column label="最低值" width="120">
          <template slot-scope="scope">
            <el-table :data="scope.row.structure2" :show-header="false">
              <el-table-column prop="zdz">
                <template slot-scope="subScope">
                  <el-input v-model="subScope.row.zdz" size="small"></el-input>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>

        <el-table-column label="平均值" width="120">
          <template slot-scope="scope">
            <el-table :data="scope.row.structure2" :show-header="false">
              <el-table-column prop="pjz">
                <template slot-scope="subScope">
                  <el-input v-model="subScope.row.pjz" size="small"></el-input>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="110">
          <template slot-scope="scope">
            <el-table :data="scope.row.structure2" :show-header="false">
              <el-table-column>
                <template slot-scope="structure2">
                  <el-button type="danger" plain size="small" @click="deleteData2(scope.$index, structure2.$index)" circle>
                    <i class="el-icon-delete"></i>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>


      </el-table>
      <el-button type="primary" size="small" style="margin-left: 45%; margin-top: 10px;" @click="saveData">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Architecture",
  data() {
    return {
      // structure: [[], [], []],
      // structure: [], 
      // structure2: [{
      //   zj: '',
      //   zgz: '',
      //   zwz: '',
      //   zdz: '',
      //   pjz:''
      // }],
      structure: [
        {
          zwxl: 111,
          structure2: [
            {
              zj: '111',
              zgz: '111',
              zwz: '111',
              zdz: '111',
              pjz: '111'
            },
            {
              zj: '222',
              zgz: '222',
              zwz: '222',
              zdz: '222',
              pjz: '222'
            }
          ]
        },
        {
          zwxl: '',
          structure2: [
            {
              zj: '',
              zgz: '',
              zwz: '',
              zdz: '',
              pjz: ''
            }
          ]
        },
      ]
    }
  },
  methods: {
    addData1() {
      this.structure.push({ structure2: [{ zj: '', zgz: '', zwz: '', zdz: '', pjz: '' }] });
    },
    addData2(row) {
      row.structure2.push({});
    },
    deleteData1(index) {
      this.structure.splice(index, 1);
    },
    deleteData2(parentIndex, childIndex) {
      this.structure[parentIndex].structure2.splice(childIndex, 1);
      if (this.structure[parentIndex].structure2.length === 0) {
        this.structure.splice(parentIndex, 1);
      }
    },
    saveData() {
      // 在这里添加保存数据的逻辑
      console.log(this.structure); // 保存数据的示例，可以根据需求替换为实际的保存操作

      // 清空数据
      // this.structure = [];
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/appMain.css';

.box {
  background-color: white;
  width: calc(100% - 20px);
  height: calc(100vh - 155px);
  margin: 10px;
  border-radius: 5px;
  padding: 15px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.structure {
  // width: 69%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);

}

::v-deep .el-table .el-table__header-wrapper th {
  font-size: 14px;
  height: 34px;
  padding: 10px 0;
}

::v-deep .el-table__row {
  height: 40px
}

::v-deep .el-table--medium .el-table__cell {
  padding: 2px 0;
}

::v-deep .el-icon-plus {
  font-weight: 900;
  margin: 0;
  padding: 0;
}
</style>
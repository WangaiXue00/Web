<template>
  <div>
    <!-- 基本信息 -->
    <el-tag class="dialog-tag">基本信息</el-tag>
    <el-form label-width="120px" :model="form" size="small" ref="formRef">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="员工号:">
              <el-input v-model="form.gh"></el-input>
            </el-form-item>
            <el-form-item label="所属部门:">
              <el-input v-model="form.ssbm"></el-input>
            </el-form-item>
            <el-form-item label="职位:">
              <el-input v-model="form.zw"></el-input>
            </el-form-item>
            <el-form-item label="是否特殊工种:">
              <el-radio v-model="form.sftsgz" label="1">是</el-radio>
              <el-radio v-model="form.sftsgz" label="2">否</el-radio>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="姓名:">
              <el-input v-model="form.xm"></el-input>
            </el-form-item>
            <el-form-item label="入职日期:">
              <el-date-picker v-model="form.rzrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="职级:">
              <el-input v-model="form.zj"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div style="">
            <el-upload class="upload-demo" drag action="http://123.57.56.30:8080/system/info/add" multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将照片文件拖到此处，或<em>点击上传</em></div>
              <!-- <div class="el-upload__tip" slot="tip">只能上传pdf文件，且不超过20MB</div> -->
            </el-upload>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- 个人信息 -->
    <el-tag class="dialog-tag">个人信息</el-tag>
    <el-form label-width="130px" :model="form" size="small" ref="formRef">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="性别:">
              <el-radio v-model="form.xb" label="1">男</el-radio>
              <el-radio v-model="form.xb" label="2">女</el-radio>
            </el-form-item>
            <el-form-item label="年龄:">
              <el-input v-model="form.nl"></el-input>
            </el-form-item>
            <el-form-item label="籍贯:">
              <el-input v-model="form.jg"></el-input>
            </el-form-item>
            <el-form-item label="婚育情况:">
              <el-input v-model="form.hyqk"></el-input>
            </el-form-item>
            <el-form-item label="现居地址（详细）:">
              <el-input v-model="form.xjdz"></el-input>
            </el-form-item>
            <el-form-item label="首次参加工作年月:">
              <el-date-picker v-model="form.sccjgzny" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="工会会员号:">
              <el-input v-model="form.ghhyh"></el-input>
            </el-form-item>
            <el-form-item label="开户行:">
              <el-input v-model="form.khh"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="民族:">
              <el-input v-model="form.mz"></el-input>
            </el-form-item>
            <el-form-item label="身份证号码:">
              <el-input v-model="form.sfzhm"></el-input>
            </el-form-item>
            <el-form-item label="员工出生日期:">
              <el-date-picker v-model="form.ygcsrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="户籍地址（详细）:">
              <el-input v-model="form.hjdz"></el-input>
            </el-form-item>
            <el-form-item label="居住证号码:">
              <el-input v-model="form.jzzhm"></el-input>
            </el-form-item>
            <el-form-item label="入职前工作年限:">
              <el-input v-model="form.rzqgznx"></el-input>
            </el-form-item>
            <el-form-item label="个人公积金账号:">
              <el-input v-model="form.grgjjzh"></el-input>
            </el-form-item>
            <el-form-item label="支行信息:">
              <el-input v-model="form1.zhxx"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="政治面貌:">
              <el-input v-model="form.zzmm"></el-input>
            </el-form-item>
            <el-form-item label="身份证有效期:">
              <el-date-picker v-model="form.sfzyxq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="员工生日:">
              <el-date-picker v-model="form.ygsr" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="户口性质:">
              <el-input v-model="form.hkxz"></el-input>
            </el-form-item>
            <el-form-item label="是否办理居住证积分:">
              <el-input v-model="form.sfbljzzjf"></el-input>
            </el-form-item>
            <el-form-item label="工作总年限:">
              <el-input v-model="form.gzznx"></el-input>
            </el-form-item>
            <el-form-item label="银行账号:">
              <el-input v-model="form.yhzh"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>

    <!-- 通讯信息 -->
    <el-tag class="dialog-tag">通讯信息</el-tag>
    <el-form label-width="130px" :model="form" size="small" ref="formRef">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="手机号码:">
              <el-input v-model="form.sjh"></el-input>
            </el-form-item>
            <el-form-item label="家庭固话:">
              <el-input v-model="form.jtgh"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="工作手机号:">
              <el-input v-model="form.gzsjh"></el-input>
            </el-form-item>
            <el-form-item label="私人邮箱:">
              <el-input v-model="form.sryx"></el-input>
            </el-form-item>

          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="工作座机:">
              <el-input v-model="form.zj"></el-input>
            </el-form-item>
            <el-form-item label="工作邮箱:">
              <el-input v-model="form.gzyx"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-form-item label="联系地址:">
        <el-input type="textarea" :rows="1" v-model="form.lxdz" style="width: 50%;">
        </el-input>
      </el-form-item>
    </el-form>

    <!-- 任职信息 -->
    <el-tag class="dialog-tag">任职信息</el-tag>
    <el-form label-width="130px" :model="form" size="small" ref="formRef">
      <el-row :gutter="20">
        <el-col :span="8">
          <div>
            <el-form-item label="任职状态:">
              <el-radio v-model="form.rzzt" label="1">在职</el-radio>
              <el-radio v-model="form.rzzt" label="2">离职</el-radio>
            </el-form-item>
            <el-form-item label="岗位序列:">
              <el-input v-model="form.gwxl"></el-input>
            </el-form-item>
            <el-form-item label="招聘渠道:">
              <el-input v-model="form.zpqd"></el-input>
            </el-form-item>
            <el-form-item label="五险一金起始月:">
              <el-date-picker v-model="form.wxyjqsy" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="招工日期:">
              <el-date-picker v-model="form.zgrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="离职日期:">
              <el-date-picker v-model="form.lzrq" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="工龄:">
              <el-input v-model="form.gl"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="员工性质:">
              <el-input v-model="form.ygxz"></el-input>
            </el-form-item>
            <el-form-item label="岗位性质:">
              <el-input v-model="form.gwxz"></el-input>
            </el-form-item>
            <el-form-item label="推荐人姓名:">
              <el-input v-model="form.tjrxm"></el-input>
            </el-form-item>
            <el-form-item label="五险一金末次月:">
              <el-date-picker v-model="form.wxyjmcy" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="退工日期:">
              <el-date-picker v-model="form1.birth" type="date" placeholder="选择日期" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="离职类型:">
              <el-input v-model="form.lzlx"></el-input>
            </el-form-item>
            <el-form-item label="司龄:">
              <el-input v-model="form.sl"></el-input>
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <el-form-item label="直接领导:">
              <el-input v-model="form.zjld"></el-input>
            </el-form-item>
            <el-form-item label="工作地:">
              <el-input v-model="form.gzd"></el-input>
            </el-form-item>
            <el-form-item label="宿舍地址:">
              <el-input v-model="form.ssdz"></el-input>
            </el-form-item>
            <el-form-item label="转正情况:">
              <el-radio v-model="form.zzqk" label="1">未转正</el-radio>
              <el-radio v-model="form.zzqk" label="2">已转正</el-radio>
            </el-form-item>
            <el-form-item label="是否住宿:">
              <el-radio v-model="form.sfzs" label="1">是</el-radio>
              <el-radio v-model="form.sfzs" label="2">否</el-radio>
            </el-form-item>
            <el-form-item label="是否宿舍长:">
              <el-radio v-model="form.sfssz" label="1">是</el-radio>
              <el-radio v-model="form.sfssz" label="2">否</el-radio>
            </el-form-item>
            <el-form-item label="离职原因:">
              <el-radio v-model="form.lzyy" label="1">离职</el-radio>
              <el-radio v-model="form.lzyy" label="2">转岗</el-radio>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-form-item label="离职备注:">
        <el-input type="textarea" :rows="2" v-model="form.lzbz" style="width: 60%;">
        </el-input>
      </el-form-item>
    </el-form>

    <!-- 学历经历 -->
    <el-tag class="dialog-tag">学历经历</el-tag>
    <el-button type="primary" plain size="small" @click="addData">新增</el-button>
    <el-table :data="educationalData" style="width: 100%">
      <el-table-column prop="xllx" label="学历类型" width="130">
        <template slot-scope="scope">
          <el-select v-model="scope.row.xllx" size="small">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="remark " label="学历" width="100">
        <template slot-scope="scope">
          <el-select v-model="scope.row.remark" size="small">
            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="rxsj" label="入学时间" width="110">
        <template slot-scope="scope">
          <el-date-picker v-model="scope.row.rxsj" type="date" size="small" placeholder="选择日期">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="bysj" label="毕业时间" width="110">
        <template slot-scope="scope">
          <el-date-picker v-model="scope.row.bysj" type="date" size="small" placeholder="选择日期">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="byyx" label="毕业院校">
        <template slot-scope="scope">
          <el-input v-model="scope.row.byyx" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="xxzy" label="学习专业">
        <template slot-scope="scope">
          <el-input v-model="scope.row.xxzy" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="xw" label="学位">
        <template slot-scope="scope">
          <el-select v-model="scope.row.xw" size="small">
            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, educationalData)" type="text" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 过往培训 -->
    <el-tag class="dialog-tag">过往培训</el-tag>
    <el-button type="primary" plain size="small" @click="addTrainData">新增</el-button>
    <el-table :data="trainingData" style="width: 100%">
      <el-table-column prop="pxqzsj" label="培训起止时间" width="360">
        <template slot-scope="scope">
          <el-date-picker v-model="scope.row.pxqzsj" type="daterange" size="medium" range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="pxjg" label="培训机构" width="120">
        <template slot-scope="scope">
          <el-input v-model="scope.row.pxjg" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="pxxm" label="培训项目" width="120">
        <template slot-scope="scope">
          <el-input v-model="scope.row.pxxm" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="pxfzdw" label="培训发证单位" width="120">
        <template slot-scope="scope">
          <el-input v-model="scope.row.pxfzdw" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="pxzsmc" label="培训证书名称">
        <template slot-scope="scope">
          <el-input v-model="scope.row.pxzsmc" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, trainingData)" type="text" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 工作经历 -->
    <el-tag class="dialog-tag">工作经历</el-tag>
    <el-button type="primary" plain size="small" @click="addDataWork">新增</el-button>
    <el-table :data="occupationalData" style="width: 100%">
      <el-table-column prop="gwlb" label="岗位类别" width="120">
        <template slot-scope="scope">
          <el-select v-model="scope.row.gwlb" size="small">
            <el-option v-for="item in optionsOcc" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="gsqy " label="公司企业" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.gsqy" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="rzzw" label="任职职务" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.rzzw" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="zwlb" label="职务类别" width="110">
        <template slot-scope="scope">
          <el-select v-model="scope.row.zwlb" size="small">
            <el-option v-for="item in optionOcc1" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="zggz" label="主管工作">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zggz" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="qssj" label="起始时间" width="110">
        <template slot-scope="scope">
          <el-date-picker v-model="scope.row.qssj" type="date" size="small" placeholder="选择日期">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="jzsj" label="截止时间" width="110">
        <template slot-scope="scope">
          <el-date-picker v-model="scope.row.jzsj" type="date" size="small" placeholder="选择日期">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="lzyy" label="离职原因">
        <template slot-scope="scope">
          <el-input v-model="scope.row.lzyy" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="gwgznx" label="过往工作年限" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.gwgznx" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="gwgzyx" label="过往工作月薪" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.gwgzyx" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="zmr" label="证明人">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zmr" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="zmrdh" label="证明人电话">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zmrdh" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, occupationalData)" type="text" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 家庭信息 -->
    <el-tag class="dialog-tag">家庭关系</el-tag>
    <el-button type="primary" plain size="small" @click="addFamData">新增</el-button>
    <el-table :data="familyInfoData" style="width: 100%">
      <el-table-column prop="qsgx" label="亲属关系" width="120">
        <template slot-scope="scope">
          <el-select v-model="scope.row.qsgx" size="small">
            <el-option v-for="item in optionsFam" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="xm " label="姓名" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.xm" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="csny" label="出生年月" width="120">
        <template slot-scope="scope">
          <el-date-picker v-model="scope.row.csny" type="date" size="small" placeholder="选择日期">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column prop="zzmm" label="政治面貌" width="120">
        <template slot-scope="scope">
          <el-select v-model="scope.row.zzmm" size="small">
            <el-option v-for="item in options1Fam" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="dwjzw" label="单位及职务">
        <template slot-scope="scope">
          <el-input v-model="scope.row.dwjzw" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="lxdh" label="联系电话" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.lxdh" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="bz" label="备注" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.bz" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="jjlxr" label="紧急联系人" width="130">
        <template slot-scope="scope">
          <el-radio v-model="scope.row.jjlxr" label="1" size="small">是</el-radio>
          <el-radio v-model="scope.row.jjlxr" label="2" size="small">否</el-radio>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, familyInfoData)" type="text" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 人才盘点 -->
    <el-tag class="dialog-tag">人才盘点</el-tag>
    <el-button type="primary" plain size="small" @click="addTalData">新增</el-button>
    <el-table :data="talentData" style="width: 100%">
      <el-table-column prop="rcpdnd" label="人才盘点年度" width="120">
        <template slot-scope="scope">
          <el-input v-model="scope.row.rcpdnd" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="rclb " label="人才类别" width="110">
        <template slot-scope="scope">
          <el-select v-model="scope.row.rclb" size="small">
            <el-option v-for="item in optionsTal" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="zygzzz" label="主要工作职责" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zygzzz" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="zyysz" label="主要优势/自己" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zyysz" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="zylsz" label="主要劣势/自己" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zylsz" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="cjdpxz" label="参加的培训/自己" width="110">
        <template slot-scope="scope">
          <el-input v-model="scope.row.cjdpxz" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="qtzz" label="其他资质" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.qtzz" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="zyyssj" label="主要优势/上级" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zyyssj" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="zylssj" label="主要劣势/上级" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zylssj" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="gzxl" label="工作效率" width="100">
        <template slot-scope="scope">
          <el-select v-model="scope.row.gzxl" size="small">
            <el-option v-for="item in options1Tal" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="kjszwql" label="可晋升职务潜力" width="110">
        <template slot-scope="scope">
          <el-select v-model="scope.row.kjszwql" size="small">
            <el-option v-for="item in options2Tal" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="zwhbrx" label="职位后备人选" width="100">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zwhbrx" size="small"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="sfxyttth" label="是否需要淘汰/替换" width="130">
        <template slot-scope="scope">
          <el-radio v-model="scope.row.sfxyttth" label="1" size="small">是</el-radio>
          <el-radio v-model="scope.row.sfxyttth" label="2" size="small">否</el-radio>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, talentData)" type="text" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>


export default {
  name: 'AddModify',
  components: {},
  props: ["editForm", 'eduData', 'traData', 'workData', 'famData', 'talData'],
  data() {
    return {
      // 基本信息
      form: {},
      form1: {},

      // 学历经历
      educationalData: [{}],
      options: [{
        value: '全日制教育',
        label: '全日制教育'
      }, {
        value: '非全日制教育',
        label: '非全日制教育'
      }, {
        value: '无',
        label: '无'
      }],
      options1: [{
        value: '本科',
        label: '本科'
      }, {
        value: '硕士研究生',
        label: '硕士研究生'
      }, {
        value: '博士研究生',
        label: '博士研究生'
      }],
      options2: [{
        value: '无',
        label: '无'
      }, {
        value: '学士',
        label: '学士'
      }, {
        value: '硕士',
        label: '硕士'
      }, {
        value: '博士',
        label: '博士'
      }],

      // 过往培训
      trainingData: [{}],

      // 工作经历
      occupationalData: [{}],
      optionsOcc: [{
        value: '国企',
        label: '国企'
      }, {
        value: '合资企业',
        label: '合资企业'
      }, {
        value: '私营企业',
        label: '私营企业'
      }, {
        value: '外资企业',
        label: '外资企业'
      }, {
        value: '政府部门',
        label: '政府部门'
      }],
      optionOcc1: [{
        value: '管理',
        label: '管理'
      }, {
        value: '技术',
        label: '管理'
      }, {
        value: '其他',
        label: '管理'
      }, {
        value: '营销',
        label: '管理'
      }],

      // 家庭信息
      familyInfoData: [{}],
      optionsFam: [{
        value: '父亲',
        label: '父亲'
      }, {
        value: '母亲',
        label: '母亲'
      }, {
        value: '儿子',
        label: '儿子'
      }, {
        value: '女儿',
        label: '女儿'
      }, {
        value: '妻子',
        label: '妻子'
      }, {
        value: '丈夫',
        label: '丈夫'
      }],
      options1Fam: [{
        value: '共青团员',
        label: '共青团员'
      }, {
        value: '民主党派成员',
        label: '民主党派成员'
      }, {
        value: '群众',
        label: '群众'
      }, {
        value: '中国共产党党员',
        label: '中国共产党党员'
      }],

      // 人才盘点
      talentData: [{}],
      optionsTal: [{
        value: '待提升人才',
        label: '待提升人才'
      }, {
        value: '核心人才',
        label: '核心人才'
      }, {
        value: '普通人才',
        label: '普通人才'
      }, {
        value: '潜力人才',
        label: '潜力人才'
      }],
      options1Tal: [{
        value: '低',
        label: '低'
      }, {
        value: '一般',
        label: '一般'
      }, {
        value: '高',
        label: '高'
      }],
      options2Tal: [{
        value: '人事实习生',
        label: '人事实习生'
      }, {
        value: '助理工程师',
        label: '助理工程师'
      }, {
        value: '财务专员',
        label: '财务专员'
      }]
    }
  },

  created() {
    if (this.editForm) {
      this.form = this.editForm
      this.educationalData = this.eduData
      this.trainingData = this.traData
      this.occupationalData = this.workData
      this.familyInfoData = this.famData
      this.talentData = this.talData
    }
    // console.log(this.editForm);
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },

    // 学历经历
    addData() {
      const obj = {}
      // this.educationalData[0].gh = this.form.gh
      this.educationalData.push(obj)
    },

    // 过往培训
    addTrainData() {
      const obj = {}
      this.trainingData.push(obj)
    },

    // 工作经历
    addDataWork() {
      const obj = {}
      this.occupationalData.push(obj)
    },
    // 家庭信息
    addFamData() {
      const obj = {}
      this.familyInfoData.push(obj)
    },
    // 人才盘点
    addTalData() {
      const obj = {}
      this.talentData.push(obj)
    },
  },
}
</script>

<style lang="scss">
.dialog-footer {
  text-align: right;
  margin-top: 30px;
}

.dialog-tag {
  display: inline-block;
  margin: 10px;
}

.el-form-item__label {
  font-size: 13px;
  font-weight: 500;
}

.el-form-item--small {
  margin-bottom: 6px;
}
</style>
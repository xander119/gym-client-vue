<template>
  <div style="width: 100%;height: 400px">
    <h1>Static Data Management</h1>
    <StaticDataTable :tableData="tableData" />
    <el-dialog :title="title" :visible.sync="dialogStaticDataFormVisible">
      <el-form :model="form" :disabled="readOnly">
        <el-form-item label="代号名称" :label-width="formLabelWidth">
          <el-input v-model="form.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型名称" :label-width="formLabelWidth">
          <el-input v-model="form.typeCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="常量状态" :label-width="formLabelWidth">
          <el-select v-model="form.active" placeholder="请选择常量状态">
            <el-option label="活动" :value="1"></el-option>
            <el-option label="非活动" :value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogStaticDataFormVisible = false"
          >取 消</el-button>
        <el-button type="primary" @click="submitChange">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import StaticDataTable from "./StaticDataTable";

export default {
  name: "StaticDataManagement",

  mounted() {
    //get Static Data
    // let api = "http://localhost:8081" + "/staticData/list";
    // axios
    //   .post(
    //     api,
    //     { typeCode: this.searchingType, pageSize: 10, pageNum: 1 },
    //     { withCredentials: true }
    //   )
    //   .then((response) => {
    //     this.tableData = response.data ? response.data.data.list : null;
    //     for (const tableDatum of this.tableData) {
    //       tableDatum.active = tableDatum.active ? 1 : 0;
    //     }
    //     console.log(this.tableData);
    //   });
  },
  components: { StaticDataTable },
  methods: {
    
    edit(row) {
      this.readOnly = false;
      this.title = "编辑常量";
      this.dialogStaticDataFormVisible = true;
      this.form = Object.assign({}, row);
    },
    submitChange() {
      this.dialogStaticDataFormVisible = false;
      let api = "http://localhost:8081" + "/staticData/update/" + this.form.staticDataId;
      console.log(this.form);
      axios.post(api, this.form).then((response) => {
        console.log("response: " + response);
      });
    },
  },
  data() {
    return {
      tableData: [
        {
          code: "MALE",
          name: "Male",
          typeCode: "Gender",
          active: "true",
          description: "Gender",
        },
        {
          code: "FEMALE",
          name: "Female",
          typeCode: "Gender",
          active: "true",
          description: "Gender",
        },
        {
          code: "ADMIN",
          name: "Admin",
          typeCode: "SecurityRole",
          active: "true",
          description: "Security Role",
        },
        {
          code: "MANAGER",
          name: "Manager",
          typeCode: "SecurityRole",
          active: "true",
          description: "Security Role",
        },
        {
          code: "CUSTOMER",
          name: "Customer",
          typeCode: "SecurityRole",
          active: "true",
          description: "Security Role",
        },
      ],
      dialogStaticDataFormVisible: false,
      form: {
        staticDataId: 0,
        name: "",
        code: "",
        typeCode: "",
        active: 0,
        description: "",
      },
      formLabelWidth: "120px",
      searchingType: "",
      readOnly: false,
      title: "编辑常量",
    };
  },
};
</script>

<style scoped></style>

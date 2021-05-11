<template>
  <el-table height="400" fit :data="tableData"   border style="width: 100%;">
    <el-table-column prop="code" label="代号"> </el-table-column>
    <el-table-column prop="name" label="名称"> </el-table-column>
    <el-table-column prop="active" label="状态"> </el-table-column>
    <el-table-column prop="typeCode" label="类型"> </el-table-column>
    <el-table-column prop="description" label="描述"> </el-table-column>
    
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button-group>
          <el-button
            type="success"
            icon="el-icon-edit"
            @click="edit(scope.row)"
          ></el-button>
          <el-button
            type="info"
            icon="el-icon-info"
            round
            @click="handleClick(scope.row)"
            >Show</el-button
          >
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "StaticDataTable",
  props: {
    tableData: Array,
  },
  methods: {
    handleClick(row) {
      this.dialogStaticDataFormVisible = true;
      this.form = row;
      this.readOnly = true;
      this.title = "常量";
    },
  },
};
</script>

<script>
export default {
  name: 'BaseTableResponsive',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div
    class="table-responsive"
    >
    <el-row>
      <el-table
        :data="data"
        border
        class="width-100"
      >
        <el-table-column
          prop="name"
          label="Name"
          sortable
          width="180"
        />
        <el-table-column
          prop="code"
          sortable
          label="Code"
        />
        <el-table-column
          prop="rate"
          sortable
          label="Rate"
        />
        <el-table-column
          prop="isEnabled"
          sortable
          label="Enabled"
        />
        <el-table-column
          prop="actions"
          sortable
          label="Actions"
        />
      </el-table>
    </el-row>
  </div>
</template>

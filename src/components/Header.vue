<template>
    <div class="card-header wizard-header">
      <el-steps
        :active="currentStep"
        align-center
        finish-status="success"
      >
        <el-step title="Company" />
        <el-step title="Currencies" />
        <el-step title="Taxes" />
        <el-step title="Finish" />
      </el-steps>
    </div>
</template>


<script>
  export default {
    name: 'Header',
    props: {
      currentStep: {
        type: Number,
        required: true
      }
    }
  }
</script>

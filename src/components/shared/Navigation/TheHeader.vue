<script>
  export default {
    name: 'Header',
    props: {
      currentStep: {
        type: Number,
        required: true
      },
      headerList: {
        type: Array,
        require: true
      }
    }
  }
</script>

<template>
  <div class="card-header wizard-header">
    <el-steps
      direction="horizontal" 
      finish-status="success"
      :active="currentStep"
      align-center
    >
      <el-step 
        v-for="(item, index) in headerList"
        :key="index" 
        :title="item" 
      />
    </el-steps>
  </div>
</template>

<style>
.card-header {
  padding: 1.25rem 1.5rem;
  margin-bottom: 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,.05);
}

.card-header:first-child {
  border-radius: calc(.375rem - 1px) calc(.375rem - 1px) 0 0;
}

.wizard-header {
  border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0;
}

.el-steps {
  display: flex;
}

.el-step.is-horizontal {
  display: inline-block;
}

.el-step {
  margin-right: 0px;
  position: relative;
  flex-basis: 25%; 
  flex-shrink: 1;
}

.el-step__title.is-process {
  font-weight: 700;
  color: #3c3f72;
}

.el-step__title {
  font-size: 16px;
  line-height: 38px;
}

.el-step__head.is-process {
  color: #3c3f72;
  border-color: #3c3f72;
}
.el-step__head {
  position: relative;
  width: 100%;
}

.el-step__head.is-wait {
    color: #e5e5e5;
    border-color: #e5e5e5;
}

.el-step__head {
  position: relative;
  width: 100%;
}

.el-step__icon {
  color: #3c3f72;
  position: relative;
  z-index: 1;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 70px;
  height: 70px;
  font-size: 35px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #3c3f72;
  -webkit-transition: .15s ease-out;
  transition: .15s ease-out;
}

.el-step__icon-inner {
  display: inline-block;
  user-select: none;
  text-align: center;
  font-weight: 700;
  line-height: 1;
  color: #ffffff;
}

.el-step__head.is-success .el-step__icon {
  background: #6da252;
}
.el-step__head.is-success {
  color: #6da252;
  border-color: #6da252;
}

.el-step__icon.is-text {
  border-radius: 50%;
  border: 5px solid;
  border-color: inherit;
}

.el-step__icon.is-process {
  color: #3c3f72;
  border-color: #3c3f72;
}
.el-step__icon.is-process {
  color: #3c3f72;
  border-color: #3c3f72;
}

.el-step__head.is-wait .el-step__icon {
  background: #e5e5e5;
}

.el-step__head.is-wait .el-step__icon-inner {
  color: #999999;
}

.el-step .el-step__line {
  margin-left: 0%;
}

.el-step.is-horizontal .el-step__line {
  height: 4px;
  top: 35px;
}

.el-step__line {
  position: absolute;
  border-color: inherit;
  background-color: #e5e5e5;
}

.el-step__head.is-success .el-step__line {
  background-color: #3c3f72;
}

.el-step__line-inner {
  display: block;
  border-width: 2px !important;
  border-style: solid;
  border-color: inherit;
  -webkit-transition: .15s ease-out;
  transition: .15s ease-out;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 0;
  height: 0;
}
</style>
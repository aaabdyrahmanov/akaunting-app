<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  } 
}
</script>

<template>
  <el-row>
    <el-col 
      v-for="(item, index) in data"
      :key="index"
      class="form-group" 
    >
        <label
          :for="item.id"
          class="form-control-label d-flex jc-left"
        >
          {{ item.name }} <span class="required"> {{ item.isRequired ? ' * ' : ''}} </span>
        </label> 
        <el-input
          v-model="item.value"
          :name="item.id"
          :value="item.value"
          :type="item.type"
          :placeholder="item.placeholder"
          :show-password="item.isShowPassword"
        >
          <template slot="prepend">
            <i :class="`fa ${item.icon}`" />
          </template>
        </el-input>
    </el-col>
  </el-row>
</template>

<style>
.required {
  color: red;
  margin: 0 4px!important;
}
</style>
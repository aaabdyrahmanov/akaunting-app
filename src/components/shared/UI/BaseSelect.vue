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
  <div class="card-select">
    <select
      multiple 
      name="languages"
      class="select-list"
    >
      <option 
        v-for="(language, index) in data" 
        :key="index"
      >
        {{ language.nativeName }}
      </option>
    </select>
  </div>
</template>

<style>
.select-list {
  padding: 0 8px;
}
.select-list option {
  font-size: 14px;
  padding: 4px;
}
</style>
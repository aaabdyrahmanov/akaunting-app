<script>
export default {
  name: 'BaseAppLogo',
  props: {
    logo: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="header">
    <img
      :src="logo.src"
      :alt="logo.description"
      class="mb-3"
    >
  </div>
</template>

<style>
.header {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  margin: auto;
  text-align: center;
}

.header img {
  width: 12%;
  margin-bottom: 3rem!important;
}
</style>
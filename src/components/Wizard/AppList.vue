<script>
export default {
  name: 'AppList',
  props: {
    apps: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <el-row>
    <el-col
      v-for="(app, index) in apps"
      :key="app.name"
      :span="6"
      style="padding: 0px 15px 60px 15px; "
    >
      <el-card 
        :key="index"
        :body-style="{ padding: '0px' }" 
      >
        <div class="d-flex jc-left cl-55588b" style="padding: 12px;">
          <a
            class="txt-dc-none"
            :href="`https://akaunting.com/apps/${app.name.toLowerCase().replace(' ', '-')}`"
          >
            {{ app.name }}
          </a>
        </div>
        <img
          :src="`https://akaunting.com/public/assets/media/${app.logoSource}`"
          class="image width-100"
          @click="`location.href=${app.url}`"
        >
        <el-row style="padding: 0 6px;">
          <el-col
            :span="16"
            class="align-left"
          >
            <i 
              v-for="item in 5" 
              :key="item" 
              class="fa fa-star text-xs txt-yellow" 
            />
            ({{ app.stars }})
          </el-col>
          <el-col
            :span="8"
            class="align-right"
          >
            {{ app.price }}
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<style>
.txt-yellow {
  color: #efef32 !important;
}

.cl-55588b {
  color: #55588b;
}
</style>
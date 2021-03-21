<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data: function () {
    return {
      isRememberMeChecked: false,
      homePage: this.$store.state.wizard.homePageUrl,
      recommendedApps: this.$store.state.wizard.recommendedApps,
      routeName: this.$route.name,
      routePath: this.$route.path
    }
  },
  computed: {
    ...mapGetters({
      currentStep: 'installation/getCurrentStep',
      headers: 'installation/getHeaders',
      loginForm: 'installation/getLoginForm'
    })
  },
  beforeCreate () {
    if(!this.routePath) {
      this.$router.push({ name: 'Language' })
    }
  },
  methods: {
    moveTo(arg) {
      console.log('moveTo')
    }
  }
}
</script>

<template>
  <div class="card login-card">
    <div class="card-body pl-3">
      <div class="align-center text-white mb-4">
        <small>Login to start your session</small>
      </div>
      <div id="app">
        <el-row>
          <el-col 
            v-for="(item, index) in loginForm"
            :key="index"
            class="form-group" 
          >
              <label
                :for="item.id"
                class="form-control-label d-flex jc-left"
              >
                {{ item.name }}
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
        <el-row>
          <el-col
            class="form-group align-left"
            :span="16"
          >
            <el-checkbox v-model="isRememberMeChecked" class="text-white">Remember Me</el-checkbox>
          </el-col>
          <el-col
            class="form-group align-right"
            :span="8"
          >
            <el-button
              type="success"
              :plain="false"
              :class="`btn btn-success`"
              @click="moveTo('home')"
            >
              <span>Login</span>
            </el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            class="form-group align-left"
          >
            <a href="https://app.akaunting.com/auth/forgot" class="text-white txt-dc-none">
              <small>I forgot my password</small>
            </a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.05);
  border-radius: .375rem;
}

.login-card {
  background-color: rgba(255, 255, 255, 0.18) !important;
  box-shadow: none;
}

.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.5rem;
}

.pl-3 {
  padding: 3rem!important;
}

.d-flex {
  display: flex;
}

.jc-left {
  justify-content: left;
}

.width-100 {
  width: 100%;
}

.btn-sm {
  font-size: 0.8em;
  font-weight: bold;
  padding: 10px;
}

.bell-icon {
  margin-right: 20px;
}

.form-group {
  margin-bottom: 1.5rem;
}
</style>

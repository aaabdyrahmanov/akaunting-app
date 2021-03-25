<script>
import { mapGetters } from 'vuex'

import TheHeader from '@/components/shared/Navigation/TheHeader'
import BaseAppLogo from '@/components/shared/Installation/BaseAppLogo'

import Language from './Language'
import Database from './Database'
import Admin from './Admin'

export default {
  name: 'Home',
  components: {
    'base-app-logo': BaseAppLogo,
    'page-language': Language,
    'page-database': Database,
    'page-admin': Admin,
    'the-header': TheHeader
  },
  computed: {
    ...mapGetters({
      currentStep: 'installation/getCurrentStep',
      headers: 'installation/getHeaders',
      logoInfo: 'installation/getLogoInfo',
      languageForm: 'installation/getLanguageForm',
      databaseForm: 'installation/getDatabaseForm',
      adminForm: 'installation/getAdminForm'
    })
  },
  created () {
    this.updatePage()
  },
  methods: {
    updatePage() {
      this.$store.dispatch('installation/updateCurrentStep', 0);
    },
    async moveTo() {
      this.$store.dispatch('installation/updateCurrentStep');
      this.nextPath = `/installation/${this.headers[this.currentStep].toLowerCase()}`

      this.$router.push(this.nextPath)
    }
  }
}
</script>

<template>
  <div class="installation-page">
    <!-- Logo -->    
    <base-app-logo
      :logo="logoInfo" 
    />
    <div class="container">
      <div class="card">
        <!-- Header -->
        <the-header
          :current-step="currentStep" 
          :header-list="headers"
        />

        <!-- Language -->
        <page-language 
          v-if="currentStep==0"
          :current-step="currentStep" 
          :headers="headers"
          :data="languageForm"
        />

        <!-- Database -->
        <page-database
          v-if="currentStep==1"
          :current-step="currentStep" 
          :headers="headers"
          :data="databaseForm"
        />
        
        <!-- Database -->
        <page-admin
          v-if="currentStep==2"
          :current-step="currentStep" 
          :headers="headers"
          :data="adminForm"
        />
      </div>
    </div>
  </div>
</template>

<style>
*, :after, :before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
} 

.installation-page {
  background: url("../../../assets/login.png");
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 2% 0;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

.mt-5 {
  margin-top: 3rem!important;
}

.text-white {
  color: #ffffff !important;
}

.txt-dc-none {
  text-decoration: none;
}

.small, small {
  font-size: 80%;
  font-weight: 400;
}

.align-left {
  text-align: left!important;
}

.align-right {
  text-align: right!important;
}

.align-center {
  text-align: center!important;
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

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

.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.5rem;
}

.card-select {
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

.form-control-label {
  color: #55588b !important;
  font-size: .875rem;
  font-weight: 600;
}

</style>

<script>
import { mapGetters } from 'vuex'
import TheHeader from '@/components/Navigation/TheHeader'

import Language from './Language'
import Database from './Database'
import Admin from './Admin'

export default {
  name: 'Home',
  components: {
    'page-language': Language,
    'page-database': Database,
    'page-admin': Admin,
    'the-header': TheHeader
  },
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
      languageForm: 'installation/getLanguageForm',
      databaseForm: 'installation/getDatabaseForm',
      adminForm: 'installation/getAdminForm'
    }),
    currenRoutePath(){
      return `/installation/${this.headers[this.currentStep].toLowerCase()}`;
    },
  },
  beforeCreate () {
    if(!this.routePath) {
      this.$router.push({ name: 'Language' })
    }
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
    />

    <!-- Database -->
    <page-database
      v-if="currentStep==1"
      :current-step="currentStep" 
      :headers="headers"
    />
    
    <!-- Database -->
    <page-admin
      v-if="currentStep==2"
      :current-step="currentStep" 
      :headers="headers"
    />
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

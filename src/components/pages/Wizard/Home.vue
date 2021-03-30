<script>
import { mapGetters } from 'vuex'

import TheHeader from '@/components/shared/Navigation/TheHeader'

import Finish from './Finish'
import Taxes from './Taxes'
import Currencies from './Currencies'
import Company from './Company'

export default {
  name: 'Home',
  components: {
    'the-header': TheHeader,
    'page-currencies': Currencies,
    'page-finish': Finish,
    'page-taxes': Taxes,
    'page-company': Company
  },
  data: function () {
    return {
      homePage: this.$store.state.wizard.homePageUrl,
      recommendedApps: this.$store.state.wizard.recommendedApps,
      routeName: this.$route.name,
      routePath: this.$route.path
    }
  },
  computed: {
    ...mapGetters({
      currentStep: 'wizard/getCurrentStep',
      headers: 'wizard/getHeaders'
    })
  },
  mounted () {
    if(!this.routePath) {
      this.$router.push({ name: 'Company' })
    }
  },
  created () {
    this.updatePage()
  },
  methods: {
    updatePage() {
      this.$store.commit('wizard/setCurrentStep', this.headers.indexOf(this.routeName));
    }
  }
}
</script>

<template>
  <div class="wizard-page">
    <div class="container-wizard">
      <h1 class="text-white">
        Wizard
      </h1>
      <div class="card">
        <!-- Header -->
        <the-header
          :current-step="currentStep" 
          :header-list="headers"
        />

        <!-- Company -->
        <page-company
          v-if="currentStep==0"
          :home-page="homePage"
          :current-step="currentStep"
          :headers="headers"
        />

        <!-- Currencies -->
        <page-currencies
          v-if="currentStep==1"
          :home-page="homePage"
          :current-step="currentStep"
          :headers="headers"
        />


        <!-- Taxes -->
        <page-taxes
          v-if="currentStep==2"
          :home-page="homePage"
          :current-step="currentStep"
          :headers="headers"
        />
        
        <!-- Finish -->
        <page-finish
          v-if="currentStep==3"
          :apps="recommendedApps"
          :home-page="homePage"
          :current-step="currentStep"
          :headers="headers"
        />
      </div>
    </div>
  </div>
</template>

<style>
.wizard-page {
  background: url("../../../assets/login.png");
  height: 100vh;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding: 0;
  z-index: -1;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container-wizard {
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 992px) {
  .container-wizard {
    max-width: 720px;
  }
}
@media (min-width: 768px) {
  .container-wizard {
    max-width: 9600px;
  }
}
@media (min-width: 576px) {
  .container-wizard {
    max-width: 1180px;
  }
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
  margin-bottom: 30px;
  -webkit-box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
  box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
  border: 0;
}

.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.5rem;
}

.align-left {
  text-align: left!important;
}

.align-right {
  text-align: right!important;
}

.d-flex {
  display: flex;
}

.jc-left {
  justify-content: left;
}

.txt-dc-none {
  text-decoration: none;
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

.text-white {
  color: #ffffff !important;
}
</style>

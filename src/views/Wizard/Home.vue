<script>
import { mapGetters } from 'vuex'
import TheHeader from '@/components/Navigation/TheHeader'

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
  beforeCreate () {
    if(!this.routePath) {
      this.$router.push({ name: 'Company' })
    }
  },
  created () {
    this.updatePage()
  },
  methods: {
    updatePage() {
      this.$store.commit('wizard/setCurrentStepp', this.headers.indexOf(this.routeName));
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
</style>

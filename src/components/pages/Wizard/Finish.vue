<script>
import AppList from '@/components/shared/Wizard/BaseAppList'
import TheFooter from '@/components/shared/Navigation/TheFooter'

export default {
  name: 'Finish',
  components: {
    'app-list': AppList,
    'the-footer': TheFooter,
  },
  props: {
    apps: {
      type: Array,
      required: true
    },
    homePage: {
      type: String,
      required: true
    },
    currentStep: {
      type: Number,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      nextPath: ''
    }
  },
  methods: {
    beforeRemove(file) {
      return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
    },
    goTo(url) {
      window.location = url;
    },
    async moveTo(direction) {
      let index
      if(direction === 'save') {
        await this.$store.dispatch('wizard/postCompanyData');
        this.$notify({
          title: '',
          dangerouslyUseHTMLString: true,
          message: '<span class="bell-icon"><i class="fas fa-bell"></i></span><span>Companies updated!</span>',
        });
        index = 1
      }
      await this.$store.dispatch(
        'wizard/updateCurrentStep',
        index ? index : direction
      );
      this.nextPath = `/wizard/${this.headers[this.currentStep+(index ? index : direction)].toLowerCase()}`

      this.$router.push(this.nextPath)
    }
  }
}
</script>

<template>
  <div
    class="card-body bg-cl-3c3f72 pd-sticky"
  >
    <div
      class="content-header"
      style="padding: 0 15px;"
    >
      <p 
        class="align-left cl-ffffff"
      >
        Recommended Apps
      </p>
    </div>
    <app-list 
      :apps="apps" 
    />
    <the-footer
      :divide="2"
      :first-button="{
        isPlain: true,
        class: 'align-left',
        classList: 'btn-icon btn-white',
        trigger: {
          function: 'moveTo',
          argument: -1
        },
        text: 'Previous'
      }"
      :second-button="{
        isPlain: false,
        type: 'success',
        class: 'align-right',
        classList: 'btn-icon btn-success',
        trigger: {
          function: 'goTo',
          argument: homePage
        },
        text: 'Go to dashboard'
      }"
      @moveTo="moveTo($event)"
      @goTo="goTo($event)"
    />
  </div>
</template>

<style>
.content-header p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  font-size: 1.0625rem;
}

.pd-sticky {
  padding: 0!important;
}

.bg-cl-3c3f72 {
  background-color: #3c3f72 !important;
}

.cl-ffffff { 
  color: #ffffff; 
}
</style>
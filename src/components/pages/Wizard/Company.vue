<script>
import TheFooter from '@/components/shared/Navigation/TheFooter'
import AppForm from '@/components/shared/Wizard/BaseAppForm'

export default {
  name: 'Company',
  components: {
    'app-form': AppForm,
    'the-footer': TheFooter
  },
  props: {
    currentStep: {
      type: Number,
      required: true
    },
    homePage: {
      type: String,
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
    async moveTo(direction) {
      if(direction === 'save') {
        await this.$store.dispatch('wizard/postCompanyData');
        this.$notify({
          title: '',
          dangerouslyUseHTMLString: true,
          message: '<span class="bell-icon"><i class="fas fa-bell"></i></span><span>Companies updated!</span>',
        });
        return this.$store.dispatch(
          'wizard/updateCurrentStep',
          1
        );
      }
      await this.$store.dispatch(
        'wizard/updateCurrentStep',
        direction
      );
      this.nextPath = `/wizard/${this.headers[this.currentStep+direction].toLowerCase()}`

      this.$router.push(this.nextPath)
    }
  }
}
</script>

<template>
  <div
    class="card-body"
  >
    <app-form
      :home-page="homePage" 
    />
    <the-footer
      :divide="1"
      :first-button="{
        isPlain: false,
        type: 'success',
        class: 'align-right',
        classList: 'btn-success',
        trigger: {
          function: 'move',
          argument: 'save'
        },
        text: 'Save'
      }"
      :second-button="{
        isPlain: true,
        type: '',
        classList: 'btn-white',
        trigger: {
          function: 'move',
          argument: 1
        },
        text: 'Save'
      }"
      @move="moveTo($event)"
    />
  </div>
</template>

<style>

</style>
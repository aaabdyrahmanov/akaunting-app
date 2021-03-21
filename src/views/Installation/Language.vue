<script>
import { mapGetters } from 'vuex'
import TheFooter from '@/components/Navigation/TheFooter'
import BaseSelect from '@/components/UI/BaseSelect'

export default {
  name: 'Language',
  components: {
    'base-select': BaseSelect,
    'the-footer': TheFooter
  },
  computed: {
    ...mapGetters({
      languageForm: 'installation/getLanguageForm'
    })
  },
  methods: {
    async moveTo() {
      this.$store.dispatch('installation/updateCurrentStep');
      this.nextPath = `/installation/${this.headers[this.currentStep].toLowerCase()}`

      this.$router.push(this.nextPath)
    }
  }
}
</script> 

<template>
  <div
    class="card-body"
  >
    <base-select
      :data="languageForm.list"
    />
    <the-footer
      :divide="0"
      :first-button="{
        isPlain: false,
        type: 'success',
        class: 'align-right',
        classList: 'btn-success',
        trigger: {
          function: 'move',
          argument: 'save'
        },
        text: 'Next'
      }"
      @move="moveTo($event)"
    />
  </div>
</template>

<style>

</style>
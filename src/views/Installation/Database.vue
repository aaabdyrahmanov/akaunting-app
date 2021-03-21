<script>
import { mapGetters } from 'vuex'
import TheFooter from '@/components/Navigation/TheFooter'
import BaseInput from '@/components/UI/BaseInput'

export default {
  name: 'Database',
  components: {
    'the-footer': TheFooter,
    'base-input': BaseInput
  },
  computed: {
    ...mapGetters({
      databaseForm: 'installation/getDatabaseForm'
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
  <div class="card-body">
    <base-input 
      :data="databaseForm" 
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
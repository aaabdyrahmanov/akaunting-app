<script>
import { mapGetters } from 'vuex'
import TheFooter from '@/components/Navigation/TheFooter'
import BaseInput from '@/components/UI/BaseInput'

export default {
  name: 'Admin',
  components: {
    'the-footer': TheFooter,
    'base-input': BaseInput
  },
  computed: {
    ...mapGetters({
      adminForm: 'installation/getAdminForm'
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
      :data="adminForm" 
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
      @click="`location.href=${app.url}`"
      @move="moveTo($event)"
    />
  </div>
</template>


<style>

</style>
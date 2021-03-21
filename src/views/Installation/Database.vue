<script>
import { mapGetters } from 'vuex'
import TheFooter from '@/components/Navigation/TheFooter'
import BaseInput from '@/components/UI/BaseInput'

export default {
  name: 'Database',
  props: {
    headers: {
      type: Array,
      required: true
    },
    currentStep: {
      type: Number,
      required: true
    }
  },
  components: {
    'the-footer': TheFooter,
    'base-input': BaseInput
  },
  data: function () {
    return {
      nextPath: ''
    }
  },
  computed: {
    ...mapGetters({
      databaseForm: 'installation/getDatabaseForm'
    })
  },
  methods: {
    async moveTo() {
      this.$store.dispatch('installation/updateCurrentStep');
      this.nextPath = `/installation/${this.headers[this.currentStep+1].toLowerCase()}`

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
        text: 'Next'
      }"
      @move="moveTo($event)"
    />
  </div>
</template>

<style>

</style>
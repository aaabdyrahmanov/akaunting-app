<script>
import TheFooter from '@/components/shared/Navigation/TheFooter'
import BaseInput from '@/components/shared/UI/BaseInput'

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
    },
    data: {
      type: Object,
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
      :data="data" 
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

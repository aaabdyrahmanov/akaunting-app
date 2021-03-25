<script>
import TheFooter from '@/components/shared/Navigation/TheFooter'
import BaseSelect from '@/components/shared/UI/BaseSelect'

export default {
  name: 'Language',
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
    'base-select': BaseSelect,
    'the-footer': TheFooter
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
  <div
    class="card-body"
  >
    <base-select
      :data="data.list"
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
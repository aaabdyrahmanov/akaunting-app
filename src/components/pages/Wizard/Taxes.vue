<script>
import TheFooter from '@/components/shared/Navigation/TheFooter'
import TableResponsive from '@/components/shared/Wizard/BaseTableResponsive'

export default {
  name: 'Taxes',
  components: {
    'table-responsive': TableResponsive,
    'the-footer': TheFooter
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    currentStep: {
      type: Number,
      required: true
    },
    homePage: {
      type: String,
      required: true
    }
  },
  data: function () {
    return {
      nextPath: ''
    }
  },
  computed: {
    currenciesData: {
      get() {
        return this.$store.state.wizard.currenciesData;
      },
      set(value) {
        this.$store.commit('wizard/setCurrenciesData', value);
      }
    },
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
  <div>
    <div
    class="card-body"
    >
      <el-row>
        <el-col
          :span="24"
          class="align-right"
        >
          <el-button
            type="success"
            class="btn btn-success btn-sm"
          >
            Add New
          </el-button>
        </el-col>
      </el-row>
    </div>
    <table-responsive
      :data="currenciesData"
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
        isPlain: true,
        class: 'align-right',
        classList: 'btn-icon btn-white',
        trigger: {
          function: 'moveTo',
          argument: 1
        },
        text: 'Next'
      }"
      @moveTo="moveTo($event)"
      />
  </div>
</template>

<script>
export default {
  name: 'BaseAppForm',
  props: {
    homePage: {
      type: String,
      required: true
    }
  },
  computed: {
    apiKey: {
      get() {
        return this.$store.state.wizard.form.apiKey;
      },
      set(value) {
        this.$store.commit('wizard/setFormAPIKey', value);
      }
    },
    taxNumber: {
      get() {
        return this.$store.state.wizard.form.taxNumber;
      },
      set(value) {
        this.$store.commit('wizard/setFormTaxNumber', value);
      }
    },
    financialStartDate: {
      get() {
        return this.$store.state.wizard.form.financialStartDate;
      },
      set(value) {
        this.$store.commit('wizard/setFormFinancialStartDate', value);
      }
    },
    address: {
      get() {
        return this.$store.state.wizard.form.address;
      },
      set(value) {
        this.$store.commit('wizard/setFormAddress', value);
      }
    }
  },
  methods: {
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
    }
  }
}
</script>

<template>
  <el-row>
    <el-col>
      <div class="form-group">
        <label
          for="apiKey"
          class="form-control-label d-flex jc-left"
        >
          API Key
        </label> 
        <el-input
          v-model="apiKey"
          name="apiKey"
          placeholder="Please input"
        >
          <template slot="prepend">
            <i class="fa fa-key" />
          </template>
        </el-input>
      </div>
      <p class=" d-flex jc-left">
        <small>
          <a
            href="https://akaunting.com/dashboard"
            target="_blank"
            class="cl-6da252 txt-dc-none"
          >
            Click here
          </a>
            to get your API key.
        </small>
      </p>
      <br>
    </el-col>
    <el-col
      :span="12"
      class="form-group"
    >
      <label
        for="taxNumber"
        class="form-control-label d-flex jc-left"
      >
        Tax Number
      </label> 
      <el-input
        v-model="taxNumber"
        name="taxNumber"
        placeholder="Enter Tax Number"
      >
        <template slot="prepend">
          <i class="fa fa-percent" />
        </template>
      </el-input>
    </el-col>
    <el-col
      :span="12"
      class="form-group"
    >
      <label
        for="financialStartDate"
        class="form-control-label d-flex jc-left"
      >
        Financial Year Start
      </label> 
      <el-date-picker
        v-model="financialStartDate"
        type="date"
        name="financialStartDate"
        placeholder="Pick one or more dates"            
        default-value="2021-03-21"
      >
        <template slot="prepend">
          <i class="fa fa-calendar" />
        </template>
      </el-date-picker>
    </el-col>
    <el-col
      :span="24"
      class="form-group"
    >
      <label
        for="address"
        class="form-control-label d-flex jc-left"
      >
        Address
      </label> 
      <el-input
        v-model="address"
        type="textarea"
        name="address"
        :rows="3"
        placeholder="Enter Address"
        cols="50"
      />
    </el-col>
    <el-col
      :span="12"
      class="form-group"
    >
      <label
        for="logo"
        class="form-control-label d-flex jc-left"
      >
        Logo
      </label> 
      <el-upload
        name="logo"
        :action="homePage"
        :before-remove="beforeRemove"
        multiple
        :limit="1"
        class="form-control-label d-flex jc-left"
      >
        <el-button
          size="small"
          type="primary"
        >
          Drop files here to upload
        </el-button>
      </el-upload>
    </el-col>
  </el-row>
</template>

<style>
label {
  display: inline-block;
  margin-bottom: .5rem;
}

.form-control-label {
  color: #55588b !important;
  font-size: .875rem;
  font-weight: 600;
}

.form-group {
  margin-bottom: 1.5rem;
}

.cl-6da252 {
  color: #6da252;
}
</style>
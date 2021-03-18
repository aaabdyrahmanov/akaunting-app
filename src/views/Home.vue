<template>
  <div class="card">
    <Header :currentStep="currentStep" />
    
    <div
      v-if="currentStep==0"
      class="card-body"
    >
      <el-row>
        <el-col>
          <div class="form-group">
            <label
              for="api-key"
              class="form-control-label"
              style="display: flex; justify-content:left;"
            >API Key</label> 
            <el-input
              v-model="apiKey"
              placeholder="Please input"
              name="api-key"
            >
              <template slot="prepend">
                <i class="fa fa-key" />
              </template>
            </el-input>
          </div>
          <p
            class="mb-0 mt--3"
            style="display: flex; justify-content:left;"
          >
            <small><a
              href="https://akaunting.com/dashboard"
              target="_blank"
              style="text-decoration: none; color: #6da252;"
            >Click here</a> to get your API key.</small>
          </p>
          <br>
        </el-col>

        <el-col
          :span="12"
          class="form-group"
        >
          <label
            for="address"
            class="form-control-label"
            style="display: flex; justify-content:left;"
          >Tax Number</label> 
          <el-input
            v-model="input1"
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
            for="address"
            class="form-control-label"
            style="display: flex; justify-content:left;"
          >Financial Year Start</label> 
          <el-date-picker
            v-model="registerationDate"
            type="dates"
            placeholder="Pick one or more dates"
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
            style="display: flex; justify-content:left;"
          >Address</label> 
          <el-input
            v-model="textarea"
            type="textarea"
            :rows="3"
            placeholder="Enter Address"
            name="address"
            cols="50"
          />
        </el-col>
        <el-col
          :span="12"
          class="form-group"
        >
          <label
            for="logo"
            style="display: flex; justify-content:left;"
          >Logo</label> 
          <el-upload
            style="display: flex; justify-content:left;"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="1"
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
        <el-row  class="card-footer">
          <div
            class="col-md-12"
            style="text-align: right!important;"
          >
            <el-button
              type="success"
              class="btn-success"
              @click="moveTo('save')"
            >
              <span class="btn-inner--text">Save</span>
            </el-button>
            <el-button
              plain
              class="btn-white"
              @click="moveTo(1)"
            >
              <span class="btn-inner--text">Skip</span>
            </el-button>
          </div>
        </el-row>
    </div>

    <div
      v-else-if="currentStep==1"
      class="card-body"
    >
      <el-row>
        <el-col
          :span="24"
          style="text-align: right!important;"
        >
          <el-button
            type="success"
            class="btn btn-success btn-sm"
          >
            Add New
          </el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-table
          :data="tableData"
          :span-method="arraySpanMethod"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="name"
            label="Name"
            sortable
            width="180"
          />
          <el-table-column
            prop="code"
            sortable
            label="Code"
          />
          <el-table-column
            prop="rate"
            sortable
            label="Rate"
          />
          <el-table-column
            prop="isEnabled"
            sortable
            label="Enabled"
          />
          <el-table-column
            prop="actions"
            sortable
            label="Actions"
          />
        </el-table>
      </el-row>
        <el-row class="card-footer">
          <el-col
            :span="12"
            style="text-align: left!important;"
          >
            <el-button
              plain
              class="btn btn-icon btn-white"
              @click="moveTo(-1)"
            >
              Previous
            </el-button>
          </el-col>
          <el-col
            :span="12"
            style="text-align: right!important;"
          >
            <el-button
              plain
              class="btn btn-icon btn-white"
              @click="moveTo(1)"
            >
              Next
            </el-button>
          </el-col>
        </el-row>
    </div>

    <div
      v-else-if="currentStep==2"
      class="card-body"
    >
      <el-row>
        <el-col
          :span="24"
          style="text-align: right!important;"
        >
          <el-button
            type="success"
            class="btn btn-success btn-sm"
          >
            Add New
          </el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-table
          :data="tableData"
          :span-method="arraySpanMethod"
          border
          style="width: 100%"
        >
          <el-table-column
            prop="name"
            label="Name"
            sortable
            width="180"
          />
          <el-table-column
            prop="code"
            sortable
            label="Code"
          />
          <el-table-column
            prop="rate"
            sortable
            label="Rate"
          />
          <el-table-column
            prop="isEnabled"
            sortable
            label="Enabled"
          />
          <el-table-column
            prop="actions"
            sortable
            label="Actions"
          />
        </el-table>
      </el-row>
      <el-row class="card-footer">
        <el-col
          :span="12"
          style="text-align: left!important;"
        >
          <el-button
            plain
            class="btn btn-icon btn-white"
            @click="moveTo(-1)"
          >
            Previous
          </el-button>
        </el-col>
        <el-col
          :span="12"
          style="text-align: right!important;"
        >
          <el-button
            plain
            class="btn btn-icon btn-white"
            @click="moveTo(1)"
          >
            Next
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div
      v-else-if="currentStep==3"
      class="card-body bg-default"
    >
      <div
        class="content-header"
        style="padding: 0 15px;"
      >
        <p style="text-align: left!important; color: #ffffff;">
          Recommended Apps
        </p>
      </div>
      <el-row>
        <el-col
          :span="6"
          style="padding: 0px 15px 60px 15px;"
        >
          <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 12px; display: flex; justify-content:left; color: #55588b;">
              <a
                href="https://akaunting.com/apps/payflexi"
                target="_blank"
                style="text-decoration: none;"
              >PayPal Express</a>
            </div>
            <img
              src="https://akaunting.com/public/assets/media/54-mark-britto/paypal-express/paypal-express-checkout-logo.png"
              class="image"
              style="width: 100%;"
            >
            <el-row style="padding: 0 6px;">
              <el-col
                :span="16"
                style="text-align: left!important;"
              >
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                (8)
              </el-col>
              <el-col
                :span="8"
                style="text-align: right!important;"
              >
                $49
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col
          :span="6"
          style="padding: 0px 15px 60px 15px;"
        >
          <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 12px; display: flex; justify-content:left; color: #55588b;">
              <a
                href="https://akaunting.com/apps/payflexi"
                target="_blank"
                style="text-decoration: none;"
              >PayFlexi</a>
            </div>
            <img
              src="https://akaunting.com/public/assets/media/1203-payflexi/payflexi/payflexi-akaunting.png"
              class="image"
              style="width: 100%;"
            >
            <el-row style="padding: 0 6px;">
              <el-col
                :span="16"
                style="text-align: left!important;"
              >
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                (20)
              </el-col>
              <el-col
                :span="8"
                style="text-align: right!important;"
              >
                Free
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col
          :span="6"
          style="padding: 0px 15px 60px 15px;"
        >
          <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 12px; display: flex; justify-content:left; color: #55588b;">
              <a
                href="https://akaunting.com/apps/stripe"
                target="_blank"
                style="text-decoration: none;"
              >Stripe</a>
            </div>
            <img
              src="https://akaunting.com/public/assets/media/4-akaunting-inc/stripe/stripe-logo.png"
              class="image"
              style="width: 100%;"
            >
            <el-row style="padding: 0 6px;">
              <el-col
                :span="16"
                style="text-align: left!important;"
              >
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                (14)
              </el-col>
              <el-col
                :span="8"
                style="text-align: right!important;"
              >
                $49
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col
          :span="6"
          style="padding: 0px 15px 60px 15px;"
        >
          <el-card :body-style="{ padding: '0px' }">
            <div style="padding: 12px; display: flex; justify-content:left; color: #55588b;">
              <a
                href="https://akaunting.com/apps/onesignal"
                target="_blank"
                style="text-decoration: none;"
              >OneSignal</a>
            </div>
            <img
              src="https://akaunting.com/public/assets/media/254-mehmet-coban/onesignal/onesignal-logo.jpg"
              class="image"
              style="width: 100%;"
            >
            <el-row style="padding: 0 6px;">
              <el-col
                :span="16"
                style="text-align: left!important;"
              >
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                <i class="fa fa-star text-xs text-yellow" />
                (12)
              </el-col>
              <el-col
                :span="8"
                style="text-align: right!important;"
              >
                $29
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <div class="card-footer">
        <el-row>
          <el-col
            :span="12"
            style="text-align: left!important;"
          >
            <el-button
              plain
              class="btn btn-icon btn-white"
              @click="moveTo(-1)"
            >
              Previous
            </el-button>
          </el-col>
          <el-col
            :span="12"
            style="text-align: right!important;"
          >
            <el-button
              type="success"
              class="btn btn-icon btn-success"
              @click="moveTo('dashboard')"
            >
              Go to dashboard
            </el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/Header'

export default {
  name: 'Home',
  components: {
    'Header': Header
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      textarea: '',
      input1: '',
      input2: '',
      tableData: [{
        name: 'British Pound',
        code: 'GBP',
        rate: '1.6',
        isEnabled: 'Yes',
        actions: 'Edit/Delete'
      }, {
        name: 'Euro',
        code: 'EUR',
        rate: '1.25',
        isEnabled: 'Yes',
        actions: 'Edit/Delete'
      }, {
        name: 'Turkish Lira',
        code: 'TRY',
        rate: '0.8',
        isEnabled: 'Yes',
        actions: 'Edit/Delete'
      }, {
        name: 'US Dollar',
        code: 'USD',
        rate: '1',
        isEnabled: 'Yes',
        actions: 'Edit/Delete'
      }],
      arraySpanMethod: []
    }
  },
  computed: {
    registeredDate() {
      return new Date(this.registrationDate);
    },
    ...mapGetters({
      currentStep: 'getCurrentStep',
      apiKey: 'getCompanyApiKey',
      registrationDate: 'getCompanyRegistrationDate'
    })
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
    },
    async moveTo(direction) {
      if (direction === 'dashboard') {
        window.location = 'https://app.akaunting.com'
      }
      if(direction === 'save') {
        await this.$store.dispatch(
          'postCompanyData',
          { apiKey: this.apiKey, registrationDate: this.registrationDate}
        );
        direction = 1
      }
      await this.$store.dispatch(
        'updateCurrentStep',
        direction
      );
    }
  }
}
</script>

<style>
.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.05);
  border-radius: .375rem;
  margin-bottom: 30px;
  -webkit-box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
  box-shadow: 0 0 2rem 0 rgba(136,152,170,.15);
  border: 0;
}

.card-header:first-child {
  border-radius: calc(.375rem - 1px) calc(.375rem - 1px) 0 0;
}
.wizard-header {
  border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0;
}

.card-header {
  padding: 1.25rem 1.5rem;
  margin-bottom: 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,.05);
}

.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.5rem;
}


.form-control-label {
  color: #55588b !important;
}

.form-control-label {
  color: #525f7f;
  font-size: .875rem;
  font-weight: 600;
}

.small, small {
  font-size: 80%;
  font-weight: 400;
}

label {
  display: inline-block;
  margin-bottom: .5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.mb--4, .my--4 {
  margin-bottom: -1.5rem!important;
}
.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.card-footer:last-child {
  border-radius: 0 0 calc(.375rem - 1px) calc(.375rem - 1px);
}
.card-footer {
  padding: 1.25rem 1.5rem;
  background-color: #fff;
  border-top: 1px solid rgba(0,0,0,.05);
}

.btn-success, .btn-success:hover  {
  color: #ffffff;
  border-color: #6da252;
  background-color: #6da252;
  box-shadow: 0 4px 6px rgba(30, 31, 57, .11), 0 1px 3px rgba(0, 0, 0, .08);
}

.btn-white {
  color: #000000;
  border-color: #ffffff;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(30, 31, 57, .11), 0 1px 3px rgba(0, 0, 0, .08);
}

.btn-sm {
  font-size: 0.8em;
  font-weight: bold;
  padding: 10px;
}

.btn-white {
  color: #000000;
  border-color: #ffffff;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(30, 31, 57, .11), 0 1px 3px rgba(0, 0, 0, .08);
  font-weight: 500;
}

.bg-default {
  background-color: #3c3f72 !important;
}

.text-yellow {
  color: #efef32 !important;
}
.content-header p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  font-size: 1.0625rem;
}

.btn-sm {
  font-size: 0.8em;
  font-weight: bold;
  padding: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.el-steps {
  display: flex;
}

.el-step.is-horizontal {
  display: inline-block;
}
.el-step {
  margin-right: 0px;
  position: relative;
  flex-basis: 25%; 
  flex-shrink: 1;
}
.el-step__title.is-process {
  font-weight: 700;
  color: #3c3f72;
}

.el-step__title {
  font-size: 16px;
  line-height: 38px;
}

.el-step.is-center .el-step__head, .el-step.is-center .el-step__main {
  text-align: center;
}
.el-step__head.is-process {
  color: #3c3f72;
  border-color: #3c3f72;
}
.el-step__head {
  position: relative;
  width: 100%;
}

.el-step__head.is-wait {
    color: #e5e5e5;
    border-color: #e5e5e5;
}

.el-step__head {
  position: relative;
  width: 100%;
}

.el-step__icon {
  color: #3c3f72;
  position: relative;
  z-index: 1;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 70px;
  height: 70px;
  font-size: 35px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #3c3f72;
  -webkit-transition: .15s ease-out;
  transition: .15s ease-out;
}

.el-step__icon-inner {
  display: inline-block;
  user-select: none;
  text-align: center;
  font-weight: 700;
  line-height: 1;
  color: #ffffff;
}

.el-step__head.is-success .el-step__icon {
  background: #6da252;
}
.el-step__head.is-success {
  color: #6da252;
  border-color: #6da252;
}

.el-step__icon.is-text {
  border-radius: 50%;
  border: 5px solid;
  border-color: inherit;
}

.el-step__icon.is-process {
  color: #3c3f72;
  border-color: #3c3f72;
}
.el-step__icon.is-process {
  color: #3c3f72;
  border-color: #3c3f72;
}

.el-step__head.is-wait .el-step__icon {
  background: #e5e5e5;
}

.el-step__head.is-wait .el-step__icon-inner {
  color: #999999;
}

.el-step.is-center .el-step__line {
  left: 50%;
  right: -50%;
}
.el-step.is-horizontal .el-step__line {
  height: 4px;
  top: 35px;
  left: 0;
  right: 0;
}

.el-step .el-step__line {
  margin-left: 50%;
}
.el-step.is-horizontal .el-step__line {
  height: 4px;
  top: 35px;
  left: 0;
  right: 0;
}
.el-step__line {
  position: absolute;
  border-color: inherit;
  background-color: #e5e5e5;
}
</style>

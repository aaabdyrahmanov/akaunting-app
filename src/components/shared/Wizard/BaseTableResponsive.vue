<script>
export default {
  name: 'BaseTableResponsive',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div
    class="table-responsive"
    >
    <el-row>
      <el-table
        :data="data"
        border
        class="width-100"
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
        >
          <template slot-scope="scope">
            <label class="custom-toggle">
              <input type="checkbox" name="" v-model="scope.row.isEnabled">
              <span
                data-label-off="No"
                data-label-on="Yes" 
                class="custom-toggle-slider rounded-circle status-green"
              ></span>
            </label>
          </template>
        </el-table-column>
        <el-table-column
          prop="actions"
          sortable
          label="Actions"
        >
          <template>
            <div class="dropdown">
                <button type="button" class="dropdown-item">
                    Edit
                </button> 
                <div class="dropdown-divider"></div>
                <button type="button" title="Delete" class="dropdown-item action-delete">Delete</button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<style>

.el-table .custom-toggle, .table .custom-toggle {
    display: block;
}

.custom-toggle {
  width: 100px;
}
.custom-toggle {
    position: relative;
    display: inherit;
    width: 52px;
    height: 1.5rem;
    margin: 0;
    display: inline-block;
}
.d-inline-block {
    display: inline-block!important;
}
label {
    display: inline-block;
    margin-bottom: .5rem;
}

.custom-toggle input {
    display: none;
}
input[type=checkbox], input[type=radio] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

input:not([type="image" i]) {
    box-sizing: border-box;
}
input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    appearance: checkbox;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
}

.custom-toggle input:checked + .status-green {
    border: 1px solid #6da252 !important;
}

.custom-toggle input:checked+.custom-toggle-slider {
    border: 1px solid #5e72e4;
}

.custom-toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid #ef3232 !important;
    border-radius: 34px!important;
    background-color: transparent;
}
.avatar.rounded-circle img, .rounded-circle {
    border-radius: 50%!important;
}

*, :after, :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.custom-toggle-slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 2px;
    border-radius: 50%!important;
    background-color: #e9ecef;
    -webkit-transition: all .15s cubic-bezier(.68,-.55,.265,1.55);
    transition: all .15s cubic-bezier(.68,-.55,.265,1.55);
}

.custom-toggle input:checked + .status-green:before {
  background-color: #6da252 !important;
}

.custom-toggle input:checked+.custom-toggle-slider:before {
  background: #5e72e4;
  -webkit-transform: translateX(28px);
  transform: translateX(28px);
}

.custom-toggle-slider:before {
  background-color: #ef3232 !important;
}

.custom-toggle input:checked + .status-green:after {
  color: #6da252 !important;
}

.custom-toggle input:checked+.custom-toggle-slider:after {
  content: attr(data-label-on);
  color: #5e72e4;
  right: auto;
  left: 0;
}

.custom-toggle-slider:after {
    color: #ef3232 !important;
    content: attr(data-label-off);
    display: block;
    font-family: inherit;
    font-weight: 600;
    font-size: .75rem;
    line-height: 24px;
    position: absolute;
    right: 0;
    margin: 0 .21667rem;
    top: -1px;
    text-align: center;
    min-width: 1.66667rem;
    overflow: hidden;
    -webkit-transition: all .15s ease;
    transition: all .15s ease;
}

.custom-toggle input:checked+.custom-toggle-slider {
    border: 1px solid #5e72e4;
}

.custom-toggle input:checked + .status-green {
    border: 1px solid #6da252 !important;
}

.avatar.rounded-circle img, .rounded-circle {
    border-radius: 50%!important;
}

.custom-toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid #ced4da;
    border-radius: 34px!important;
    background-color: transparent;
}
.custom-toggle-slider {
    border: 1px solid #ef3232 !important;
}
.el-table td, .el-table th, .table td, .table th {
    color: #525f7f;
    font-size: .8125rem;
    white-space: nowrap;
}
.text-center {
    text-align: center!important;
}

.btn:not(:last-child) {
    margin-right: .5rem;
}
.btn-neutral {
    color: #000000;
    border: 0;
    border-color: unset;
    background-color: unset;
    box-shadow: unset;
}

.text-light {
    color: #e5e5e5 !important;
}

.btn-neutral {
    color: #5e72e4;
}

.btn-group-sm>.btn, .btn-sm {
    font-size: .75rem;
}
.btn {
    position: relative;
    text-transform: none;
    -webkit-transition: all .15s ease;
    transition: all .15s ease;
    letter-spacing: .025em;
    font-size: .875rem;
    will-change: transform;
}
.action-delete {
    background-color: white;
    border-color: white;
    border: 0;
}


.el-table td div {
    box-sizing: border-box;
}
</style>

<script>
export default {
  name: 'TheFooter',
  props: {
    firstButton: {
      type: Object,
      required: true
    },
    secondButton: {
      type: Object,
      required: false
    },
    divide: {
      type: Number,
      required: true
    }
  }
}
</script>

<template>
  <el-row class="card-footer">
    <el-col
      v-if="divide==1"
      :span="24"
      :class="firstButton.class"
    >
      <el-button
        :type="firstButton.type"
        :plain="firstButton.isPlain"
        :class="`btn ${firstButton.classList}`"
        @click="$emit(firstButton.trigger.function, firstButton.trigger.argument)"
      >
        <span>{{ firstButton.text }}</span>
      </el-button>
      <el-button
        :type="secondButton.type"
        :plain="secondButton.isPlain"
        :class="`btn ${secondButton.classList}`"
        @click="$emit(secondButton.trigger.function, secondButton.trigger.argument)"
      >
        <span>{{ secondButton.text }}</span>
      </el-button>
    </el-col>
    <el-col
      v-if="divide==2"
      :span="12"
      :class="firstButton.class"
    >
      <el-button
        :type="firstButton.type"
        :plain="firstButton.isPlain"
        :class="`btn ${firstButton.classList}`"
        @click="$emit(firstButton.trigger.function, firstButton.trigger.argument)"
      >
        <span>{{ firstButton.text }}</span>
      </el-button>
    </el-col>
    <el-col
      v-if="divide==2"
      :span="12"
      :class="secondButton.class"
    >
      <el-button
        :type="secondButton.type"
        :plain="secondButton.isPlain"
        :class="`btn ${secondButton.classList}`"
        @click="$emit(secondButton.trigger.function, secondButton.trigger.argument)"
      >
        <span>{{ secondButton.text }}</span>
      </el-button>
    </el-col>
    <el-col
      v-if="divide==0"
      :class="firstButton.class"
    >
      <el-button
        :type="firstButton.type"
        :plain="firstButton.isPlain"
        :class="`btn ${firstButton.classList}`"
        @click="$emit(firstButton.trigger.function, firstButton.trigger.argument)"
      >
        <span>{{ firstButton.text }}</span>
      </el-button>
    </el-col>
  </el-row>
</template>

<style>
.card-footer {
  padding: 1.25rem 1.5rem;
  background-color: #fff;
  border-top: 1px solid rgba(0,0,0,.05);
}

.card-footer:last-child {
  border-radius: 0 0 calc(.375rem - 1px) calc(.375rem - 1px);
}

.btn-success, .btn-success:hover {
  color: #ffffff;
  border-color: #6da252;
  background-color: #6da252;
  box-shadow: 0 4px 6px rgba(30, 31, 57, .11), 0 1px 3px rgba(0, 0, 0, .08);
}
</style>
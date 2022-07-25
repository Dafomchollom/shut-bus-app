<template>
  <div class="flex items-center gap-x-4">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="flex items-center"
    >
      <input
        :id="option"
        type="radio"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-4 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
        name="radio-input"
        :value="option"
        @change="$emit('input', option)"
      />
      <label :for="option" class="ml-2 text-sm font-medium text-gray-900">
        {{ option }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppRadioButton',
  props: {
    options: {
      required: true,
      type: Array,
    },
  },
})
</script>

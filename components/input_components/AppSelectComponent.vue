<template>
  <div class="">
    <label :for="id" class="ml-1 text-sm font-bold text-gray-900">
      {{ title }}
    </label>
    <select
      v-model="selectedOption"
      class="form-select block w-full px-3 py-1.5 mt-1 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      @input="
        (event) => {
          $emit('input', event.target.value)
        }
      "
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        :placeholder="placeholder"
      >
        {{ option }}
      </option>
    </select>
    <p class="text-gray-400 text-xs px-1">{{ hint }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// declare module code
declare module 'vue/types/vue' {
  interface Vue {
    selectedOption: String | Number | null
  }
}

export default Vue.extend({
  name: 'AppSelectComponent',
  props: {
    title: {
      required: true,
      type: String,
    },
    placeholder: {
      type: String,
      default: 'placeholder',
    },
    name: {
      type: Number,
      default: 0,
    },
    hint: {
      type: String,
      default: '',
    },
    id: {
      required: true,
      type: String,
    },
    value: {
      type: Number,
      default: 0,
    },
    options: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: '',
    }
  },
  watch: {
    value(newValue) {
      this.selectedOption = newValue
    },
  },
  mounted() {
    this.selectedOption = this.value
  },
})
</script>

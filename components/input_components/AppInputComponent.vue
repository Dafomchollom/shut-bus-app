<template>
  <div class="">
    <label :for="id" class="ml-1 text-sm font-bold text-gray-900">
      {{ title }}
    </label>
    <input
      :id="id"
      type="text"
      class="my-1 bg-white border border-gray-300 text-gray-900 text-sm rounded block w-full p-2 dark:placeholder-gray-400"
      name=""
      :value="value"
      :placeholder="placeholder"
      @blur="$emit('blur', $event)"
      @input="$emit('input', $event.target.value)"
    />
    <p class="text-gray-400 text-xs px-1">{{ hint }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppInputComponent',
  props: {
    title: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
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
      type: [String, Number],
      default: '',
    },
  },
})
</script>

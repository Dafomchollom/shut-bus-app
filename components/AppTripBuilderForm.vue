<template>
  <div class="px-7 py-10 rounded bg-white dark:bg-gray-100">
    <div class="flex justify-center mb-10">
      <app-radio-button :options="['One-way', 'Round-trip']" />
    </div>
    <div class="grid grid-cols-12 gap-4 mb-8">
      <div class="md:col-span-5 col-span-12">
        <app-input-component
          id="depart_from"
          title="Depart From"
          type="text"
          hint="Your bus will arrive at 7:45 AM for pre-boarding."
        />
      </div>
      <div class="md:col-span-4 col-span-12">
        <app-date-picker-component id="date_picker" title="On" />
      </div>
      <div class="md:col-span-3 col-span-12">
        <app-select-component
          id="time"
          title="At"
          :options="['8 AM', '9 AM']"
          placeholder="Time"
        />
      </div>
    </div>
    <div class="mb-8">
      <app-input-component
        id="travel_to"
        title="Travel To"
        hint="You'll will arrive at 8:35 AM on December 25."
      />
    </div>
    <hr />
    <div class="my-8">
      <app-number-input-component
        id="estimated_passenger"
        title="Estimated Passengers"
      />
    </div>
    <hr />
    <div class="flex w-full justify-center mt-8">
      <button
        class="text-sm w-60 py-3 rounded flex gap-x-1 items-center justify-center bg-blue-500 text-white"
        @click="theme(1)"
      >
        View prices
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h13M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import AppDatePickerComponent from './input_components/AppDatePickerComponent.vue'
import AppInputComponent from './input_components/AppInputComponent.vue'
import AppNumberInputComponent from './input_components/AppNumberInputComponent.vue'
import AppRadioButton from './input_components/AppRadioButton.vue'
import AppSelectComponent from './input_components/AppSelectComponent.vue'

export default Vue.extend({
  name: 'AppTripBuilderForm',
  components: {
    AppRadioButton,
    AppInputComponent,
    AppDatePickerComponent,
    AppSelectComponent,
    AppNumberInputComponent,
  },
  methods: {
    ...mapMutations({
      theme: 'theme/SET_INDEX',
    }),
  },
})
</script>

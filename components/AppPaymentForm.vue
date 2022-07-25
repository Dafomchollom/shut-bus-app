<template>
  <div class="px-7 py-10 rounded bg-white dark:bg-gray-100">
    <div class="mb-5">
      <h3 class="text-center font-bold text-xl mb-4">
        Los Angeles International Airport to Las Vegas
      </h3>
      <p class="text-sm text-center text-gray-600">December 25</p>
      <p class="text-xs text-center text-gray-400">ev-na-40025722</p>
    </div>
    <hr />
    <div class="my-5">
      <div class="flex justify-between">
        <p class="font-bold text-sm text-black">10 Passengers</p>
        <a class="text-blue-500 text-sm flex items-center gap-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0077E8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
            />
            <circle cx="12" cy="10" r="3" />
          </svg>
          view itinerary</a
        >
      </div>
    </div>
    <h3 class="text-center font-bold text-xl mb-5">Sprinter Van x 1</h3>

    <div>
      <div class="flex justify-between mb-4">
        <p>Sprinter Van x 1 with driver</p>
        <p>$447.99</p>
      </div>
      <div class="flex justify-between mb-4">
        <a class="text-black">Service Fee</a>
        <p>$17.99</p>
      </div>
      <div class="flex justify-between mb-4">
        <a class="text-black">Gratuity</a>
        <p>$23.99</p>
      </div>
      <hr />
      <div class="flex justify-between my-4">
        <a class="text-black">Subtotal</a>
        <p>$488.80</p>
      </div>
      <div class="flex justify-between mb-4">
        <a class="text-black">FICAV</a>
        <p>$488.80</p>
      </div>
      <hr />
      <div class="flex justify-between my-4">
        <a class="text-black">Total(USD)</a>
        <p>$490.51</p>
      </div>
      <div class="flex gap-x-2 mb-4 items-end">
        <app-input-component
          id="Promo_code"
          title="Promo code"
          placeholder="Promo code"
        />
        <button class="h-9 mb-1 px-5 bg-gray-200 rounded">Apply</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppDatePickerComponent from './input_components/AppDatePickerComponent.vue'
import AppInputComponent from './input_components/AppInputComponent.vue'
import AppNumberInputComponent from './input_components/AppNumberInputComponent.vue'
import AppRadioButton from './input_components/AppRadioButton.vue'
import AppSelectComponent from './input_components/AppSelectComponent.vue'

export default Vue.extend({
  name: 'AppPaymentCardForm',
  components: {
    AppRadioButton,
    AppInputComponent,
    AppDatePickerComponent,
    AppSelectComponent,
    AppNumberInputComponent,
  },
})
</script>

<template>
  <div class="px-7 py-10 rounded bg-white dark:bg-gray-100">
    <h3 class="text-center font-bold text-xl mb-4">Payment Details</h3>
    <div
      class="text-sm font-medium text-center w-auto text-black border-b border-gray-200 dark:text-gray-100 dark:border-gray-700 mb-5"
    >
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
          <a
            href="#"
            class="inline-block px-4 py-2 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
            aria-current="page"
            >Pay now</a
          >
        </li>
      </ul>
    </div>
    <p class="text-gray-500 text-sm mb-5">
      Enter your credit details and pay for your trip in full today
    </p>
    <div class="mb-2">
      <app-input-component id="card_number" title="Card number" type="text" />
    </div>
    <div class="grid grid-cols-3 gap-x-3 mb-2 w-full">
      <app-input-component id="cvc" title="CVC" type="text" />
      <app-input-component
        id="month"
        title="Month"
        type="text"
        placeholder="MM"
      />
      <app-input-component
        id="year"
        title="Year"
        type="text"
        placeholder="YYYY"
      />
    </div>
    <hr />
    <div class="flex mt-5 gap-x-3 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#008000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
      <div>
        <h3 class="font-bold">Secure credit card payment</h3>
        <p class="text-gray-500 text-xs">
          This is a secure 128-bit SSL encrypted payment
        </p>
      </div>
    </div>

    <!-- <div class="flex justify-center mb-10">
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
    </div> -->
    <!-- <hr /> -->
    <!-- <div class="flex w-full justify-center mt-8">
      <button
        class="text-sm w-60 py-3 rounded flex gap-x-1 items-center justify-center bg-blue-500 text-white"
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
    </div> -->
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

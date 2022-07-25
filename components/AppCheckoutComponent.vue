<template>
  <div class="w-full mx-auto">
    <div>
      <div class="gap-x-3">
        <div class="mb-20 w-full grid grid-cols-12 gap-x-5">
          <!-- <app-trip-builder-form /> -->
          <div class="col-span-12 md:col-span-4 mb-5">
            <app-address-form />
          </div>
          <div class="col-span-12 md:col-span-4 mb-5">
            <app-payment-card-form />
          </div>
          <div class="col-span-12 md:col-span-4 mb-5">
            <app-payment-form />
          </div>
        </div>
      </div>
      <div>
        <app-footer />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppFooter from './layout/AppFooter.vue'
import AppAddressForm from '@/components/AppAddressForm.vue'
import AppPaymentCardForm from '@/components/AppPaymentCardForm.vue'
import AppPaymentForm from './AppPaymentForm.vue'

export default Vue.extend({
  name: 'AppCheckoutComponent',
  components: {
    // AppTripBuilderForm,
    AppPaymentCardForm,
    AppAddressForm,
    AppFooter,
    AppPaymentForm,
  },
})
</script>

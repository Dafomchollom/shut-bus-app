<template>
  <div>
    <!-- <AppTripBuilderComponent /> -->
    <AppCheckoutComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    // AppTripBuilderComponent: () =>
    //   import('@/components/AppTripBuilderComponent.vue'),
    AppCheckoutComponent: () => import('@/components/AppCheckoutComponent.vue'),
  },
})
</script>

<template>
  <div class="w-full max-w-2xl mx-auto">
    <div>
      <div class="mb-20">
        <app-trip-builder-form />
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
import AppTripBuilderForm from './AppTripBuilderForm.vue'
import AppFooter from './layout/AppFooter.vue'

export default Vue.extend({
  name: 'AppTripBuilderComponent',
  components: { AppTripBuilderForm, AppFooter },
})
</script>

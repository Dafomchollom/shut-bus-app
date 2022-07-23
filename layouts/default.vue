<template>
  <div>
    <app-sidebar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    AppSidebar: () => import('@/components/layout/AppSidebar.vue'),
  },
})
</script>
AppSidebar

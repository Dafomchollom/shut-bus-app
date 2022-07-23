<template>
  <div
    class="min-h-screen bg-gray-200 dark:bg-gray-900 ease-in-out duration-500"
  >
    <app-navbar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    AppNavbar: () => import('~/components/layout/AppNavbar.vue'),
  },
  computed: {
    ...mapGetters('theme', { theme: 'getTheme' }),
  },

  watch: {
    theme(newTheme) {
      if (document) {
        newTheme === 'light' && document.querySelector('html')
          ? document.querySelector('html')?.classList.remove('dark')
          : document.querySelector('html')?.classList.add('dark')
      }
    },
  },
  beforeMount() {
    this.$store.dispatch('theme/initTheme')
  },
})
</script>
AppSidebar

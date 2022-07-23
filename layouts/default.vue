<template>
  <div
    class="min-h-screen bg-green-500 text-gray-700 dark:bg-black dark:text-purple-50"
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
    this.$store.dispatch('initTheme')
  },
})
</script>
AppSidebar

<template>
  <div
    class="min-h-screen bg-gray-100 dark:bg-gray-900 ease-in-out duration-500"
  >
    <app-navbar />
    <div class="px-5 py-10">
      <nuxt />
    </div>
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

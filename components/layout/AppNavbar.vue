<template>
  <div>
    <button class="dark:text-red-400 text-cyan-200" @click="toggleTheme">
      theme changer
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'AppSidebar',
  methods: {
    // toggleTheme() {
    //   this.$store.dispatch('toggleTheme')
    // },
    ...mapActions({
      toggleTheme: 'theme/toggleTheme',
    }),
  },
})
</script>

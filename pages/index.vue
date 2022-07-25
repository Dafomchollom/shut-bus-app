<template>
  <div>
    <!-- <AppTripBuilderComponent /> -->
    <!-- <AppCheckoutComponent /> -->
    <component :is="currentCardComponent" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  name: 'IndexPage',
  components: {
    AppTripBuilderComponent: () =>
      import('@/components/AppTripBuilderComponent.vue'),
    AppCheckoutComponent: () => import('@/components/AppCheckoutComponent.vue'),
  },
  computed: {
    ...mapState({
      step: (state: any) => state.theme.steps,
    }),
    currentCardComponent() {
      return this.step === 0
        ? 'AppTripBuilderComponent'
        : this.step === 1
        ? 'AppCheckoutComponent'
        : this.step === 2
        ? 'AppCheckoutComponent'
        : this.step === 3
    },
  },
  watch: {
    userProfile: {
      handler(newVal) {
        console.log(newVal, '::::: newVal :::::')
      },
    },
  },
  methods: {
    ...mapMutations({
      theme: 'theme/SET_INDEX',
    }),
  },
})
</script>

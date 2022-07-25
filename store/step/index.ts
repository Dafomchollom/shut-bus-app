import { ActionTree } from 'vuex'

export interface OrderStore {
  steps: number
}

export const strict = false

// state
export const state = () => ({
  steps: 0 as number,
})

// mutations
export const mutations = {
  /**
   * vuex mutation to set user step in the store and local storage
   * @param step
   */
  SET_INDEX: (state: OrderStore, step: number) => {
    state.steps = step
    localStorage.setItem('step', String(step))
  },
}

// actions
export const actions: ActionTree<OrderStore, any> = {
  /**
   * vuex action to check user step in the local storage and set user step
   * @param theme
   */
  initStep({ commit }: { commit: Function }) {
    const cachedStep = localStorage.getItem('step') ? localStorage.step : false

    if (cachedStep) {
      const userStep = localStorage.getItem('step')

      commit('SET_STEP', userStep)
    }
  },
}

// getters
export const getters = {
  /**
   * this is a vuex getter for getting user step from store
   * @returns step: number
   */
  getStep: (state: OrderStore) => state.steps,
}

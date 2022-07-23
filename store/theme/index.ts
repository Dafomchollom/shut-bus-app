import { ActionTree } from 'vuex'

export interface ThemeStore {
  theme: 'dark' | 'light'
}

export const strict = false

// state
export const state = () => ({
  theme: '' as 'light' | 'dark',
})

// mutations
export const mutations = {
  /**
   * vuex mutation to set user theme in the store and local storage
   * @param theme
   */
  SET_THEME: (state: ThemeStore, theme: 'dark' | 'light') => {
    state.theme = theme
    localStorage.theme = theme
  },
}

// actions
export const actions: ActionTree<ThemeStore, any> = {
  /**
   * vuex action to check user theme in the local storage and set user preferred theme
   * @param theme
   */
  initTheme({ commit }: { commit: Function }) {
    const cachedTheme = localStorage.theme ? localStorage.theme : false

    const userPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (cachedTheme) commit('SET_THEME', cachedTheme)
    else if (userPrefersDark) commit('SET_THEME', 'dark')
    else commit('SET_THEME', 'light')
  },

  /**
   * vuex action to toggle theme from storage.
   * @param theme
   */
  toggleTheme({ commit }: { commit: Function }) {
    switch (localStorage.theme) {
      case 'light':
        commit('SET_THEME', 'dark')
        break

      default:
        commit('SET_THEME', 'light')
        break
    }
  },
}

// getters
export const getters = {
  /**
   * this is a vuex getter for getting user theme from store
   * @returns theme: 'light' | 'dark'
   */
  getTheme: (state: ThemeStore) => state.theme,
}

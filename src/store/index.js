import Vue from 'vue'
import Vuex from 'vuex'
import countries from '@/assets/flags'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    finished: false,
    countries,
    selectedCountries: [],
    isLoading: false,
    snackbar: false
  },
  mutations: {
    CLEAR_SELECTED_COUNTRIES(state) {
      state.selectedCountries = []
    },
    ADD_COUNTRY(state, country) {
      state.selectedCountries.push(country)
    },
    REMOVE_COUNTRY(state, index) {
      state.selectedCountries.splice(index, 1)
    },
    SET_FINISH(state, value) {
      state.finished = value
    },
    SET_LOADING(state, value) {
      state.isLoading = value
    },
    SET_SNACKBAR(state, value) {
      state.snackbar = value
    }
  },
  actions: {
    async sendHandler({
      state,
      commit
    }) {
      commit('SET_LOADING', true)
      const {
        default: axios
      } = await import( /* webpackChunkName: "axiosInstance" */ '@/http')
      try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/post', state.selectedCountries)
        commit('CLEAR_SELECTED_COUNTRIES')
        commit('SET_FINISH', false)
        return res
      } catch (e) {
        throw new Error(e)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  }
})
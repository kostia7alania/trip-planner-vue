import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentCountry: 'Russia',
    countries: [
      {
        name: 'Russia',
        places: {
          start: [],
          stop: [],
        }
      },
      {
        name: 'USA',
        places: {
          start: [],
          stop: [],
        }
      },
      {
        name: 'Ukraine',
        places: {
          start: [],
          stop: [],
        }
      }
    ]
  },
  mutations: {
    SET_CURRENT_COUNTRY(state, country) {
      state.currentCountry = country
    },
    SET_START(state, { name, start }){
      const index = state.countries.findIndex(country=>country.name === name)
      state[index].places.start = start
    },
    SET_STOP(state, { name, stop }){
      const index = state.countries.findIndex(country=>country.name === name)
      state[index].places.start = stop
    },
  },
  actions: {

  },
  modules: {
  }
})

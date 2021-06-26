import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      window: {
        width: 0,
        height: 0
      }
    },
    mutations: {

    
      SET_WINDOW(state, window) {
        state.window = window
      }
    },
    getters: {
    },
  
    actions: {
      setWindow(store, window) {
        store.commit('SET_WINDOW', window)
      }
    }
});
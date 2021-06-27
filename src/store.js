import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      window: {
        width: 0,
        height: 0
      },
      menu: null,
    },
    mutations: {

    
      SET_WINDOW(state, window) {
        state.window = window
      },
      SET_MENU(state, menu_state) {
        state.menu = menu_state

      }

    },
    getters: {
    },
  
    actions: {
      setWindow(store, window) {
        store.commit('SET_WINDOW', window)
      },
      setMenu(store, state) {
        store.commit('SET_MENU', state)
      }
    }
});
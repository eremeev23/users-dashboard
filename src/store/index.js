import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    signup: false,
  },
  getters: {
    getLogIn: function(state) {
      return state.login
    },
    getSignUp: function(state) {
      return state.signup
    },
  },
  mutations: {
    ToggleLogin: function(state) {
      state.login = !state.login;
      state.signup = false;
    },
    ToggleSignUp: function(state) {
      state.signup = !state.signup;
      state.login = false;
    }
  },
  actions: {
  },
  modules: {
  }
})

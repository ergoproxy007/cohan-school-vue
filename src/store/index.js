import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import task from '../../modules/student/store'

// Vuex Initialization
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    task
  },
  plugins: [createPersistedState()]
})

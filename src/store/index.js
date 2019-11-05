import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show: true,
    mini: false
  },
  mutations: {
    changeShow() {
      this.state.show = !this.state.show


    },
    changeMini() {
      this.state.mini = !this.state.mini


    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getShow(state) {
      return state.show
    },
    getMini(state) {
      return state.mini
    }
  }
})

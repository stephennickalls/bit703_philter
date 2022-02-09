// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    userName: 'you are not logged in',
    userID: '',
    currentImageID: ''
  },
  mutations: {
    login (state, token) {
      state.token = token
    },
    logout (state) {
      state.token = ''
      state.userName = 'you are not logged in'
    },

    setUserName (state, userName) {
      state.userName = userName
    },

    unSetUserName (state) {
      state.userName = 'you are not logged in'
    },

    setUserID (state, userID) {
      state.userID = userID
    },

    unSetuserID (state) {
      state.userID = ''
    },
    setCurrentImageID (state, imageID) {
      state.currentImageID = imageID
    }
    // unSetCurrentImageID (state) {
    //   state.currentImageID = ''
    // }

  },
  actions: {
    login ({ commit }, token) {
      localStorage.setItem('token', token)
      commit('login', token)
    },
    logout ({ commit }) {
      localStorage.removeItem('token')
      commit('logout')
    }

  },
  getters: {
    isLoggedIn: state => !!state.token,
    getToken: state => state.token,
    getUserName: state => state.userName,
    getUserID: state => state.userID,
    getCurrentImageID: state => state.currentImageID
  }
})

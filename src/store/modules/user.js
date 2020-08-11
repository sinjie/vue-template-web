import { setToken, removeToken, getUserInfo, setUserInfo } from "../../utils/auth";

const user = {
  state: {
    userInfo: getUserInfo() || {}
  },

  mutations: {
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo
      setUserInfo(userInfo)
    }
  },

  actions: {
    Login({ commit }, data) {
      return new Promise((resolve, reject) => {
        if (data.token && data.userInfo && data.userInfo.username) {
          commit('SET_USERINFO', data.userInfo)
          setToken(data.token)
          resolve()
        }else {
          reject('登录信息获取失败')
        }
      })
    },
    Logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_USERINFO', {})
        removeToken()
        resolve()
      })
    }
  }
}

export default user

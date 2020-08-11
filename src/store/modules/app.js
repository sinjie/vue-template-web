import Cookies from 'js-cookie'
import {getLang, setLang} from '../../utils/auth'

const app = {
  state: {
    theme: Cookies.get('theme') || 'dark',
    lang: getLang() || 'zh'
  },
  mutations: {
    SET_THEME: (state, theme) => {
      state.theme = theme
      Cookies.set('theme', theme)
    },
    SET_LANG: (state, lang) => {
      state.lang = lang
      setLang(lang)
    }
  },
  actions: {
    setTheme({ commit }, theme) {
      commit('SET_THEME', theme)
    },
    setLang({ commit }, lang) {
      commit('SET_LANG', lang)
    },
  }
}

export default app

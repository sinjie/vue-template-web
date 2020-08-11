import Cookies from 'js-cookie'

const langName = 'lang'

const getLang = () => {
  return Cookies.get(langName)
}

const setLang = (lang) => {
  return Cookies.set(langName, lang)
}

const removeLang = () => {
  return Cookies.remove(langName)
}

const tokenName = 'token'

const getToken = () => {
  return Cookies.get(tokenName)
}

const setToken = (token) => {
  return Cookies.set(tokenName, token)
}

const removeToken = () => {
  return Cookies.remove(tokenName)
}

const userInfoName = 'userInfo'

const getUserInfo = () => {
  return JSON.parse(Cookies.get(userInfoName) || '{}')
}

const setUserInfo = (userInfo) => {
  return Cookies.set(userInfoName, userInfo)
}

export {
  getLang,
  setLang,
  removeLang,
  getToken,
  setToken,
  removeToken,
  getUserInfo, 
  setUserInfo
}
import router from "./router";
import { getToken, getUserInfo } from "./utils/auth";

router.beforeEach((to, from, next) => {
  let isLogin = getToken() && getUserInfo().username
  if (isLogin) {
    if (to.name === 'login') {
      next('/index')        
    }else{
      next()
    }
  } else {
    if (to.meta.login === true) {
      next({name: 'login', query: {redirect: to.fullPath}})
    }else{
      next()
    }
  }
})
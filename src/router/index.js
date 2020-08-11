import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

export const navRoutes = [
  {
    path: "/index",
    name: "home",
    meta: {
      title: "nav.home",
    },
    component: () => import("@/views/Home")
  },
  {
    path: "/index1",
    name: "home1",
    meta: {
      title: "nav.dataList",
      login: true
    },
    component: () => import("@/views/Home")
  }
]
const otherRoutes = [
  {
    path: "",
    redirect: "/index"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login")
  },
  {
    path: "/",
    name: "user",
    component: () => import("@/views/User"),
    redirect: "/info",
    meta: {
      title: "nav.userInfo",
      icon: "el-icon-s-home",
    },
    children: [
      {
        path: "/info",
        component: () => import("@/views/User/Info")
      },
    ],
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: navRoutes.concat(otherRoutes),
})

export default router

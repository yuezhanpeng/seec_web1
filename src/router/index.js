import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    redirect: "login",
    // component: HomeView,
  },
  {
    path: "/home",
    name: "home",
    redirect: "/home/index",
    component: () => import("../views/HomeView.vue"),
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("../views/Index.vue")
      },
      {
        path: "document",
        name: "document",
        component: () => import("../views/Document.vue")
      },
      {
        path: "lead",
        name: "lead",
        component: () => import("../views/Lead.vue")
      }
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

// 守卫
router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    // 登录界面不设权限
    next()
  } else {
    // 非登录界面设置权限
    let token = localStorage.getItem("token")
    if (token) {
      // 有权限的人
      next()
    } else {
      // 没有权限
      next({ name: "login" })
    }
  }
})

export default router;

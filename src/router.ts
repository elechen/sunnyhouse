import Vue from 'vue';
import Router, { Route } from 'vue-router';
import Home from './views/Home.vue';
import * as user from './models/user';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
    },
  ],
});

router.beforeEach((to: Route, from: Route, next) => {
  if (to.redirectedFrom === 'pspjjc.chenxiaofeng.vip/sunnyhouse') {
    user.set(to.query as any as user.User);
  }
  if (to.name === 'login') {
    next();
  } else {
    if (user.get()) {
      next();
    } else {
      next('/login');
    }
  }
});

export default router;

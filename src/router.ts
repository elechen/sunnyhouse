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
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: () => import(/* webpackChunkName: "agreement" */ './views/Agreement.vue'),
    },
    {
      path: '/manager',
      name: 'manager',
      component: () => import(/* webpackChunkName: "manager" */ './views/Manager.vue'),
    },
  ],
});

router.beforeEach((to: Route, from: Route, next) => {
  const sid = to.query.sid as string;
  if (sid) {
    const api = `http://pspjjc.chenxiaofeng.vip/sunnyhouse/user?sid=${sid}`;
    // const api = `http://localhost:8000/sunnyhouse/user?sid=${sid}`;
    Vue.axios.get(api).then((response) => {
      const data = response.data;
      if (data.code === 'SUCCESS') {
        if (data.data) {
          user.set(data.data);
          next();
        } else {
          next('/login');
        }
      } else {
        next('/login');
      }
    });
    return;
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

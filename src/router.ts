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
  console.log(to.query);
  const sid = to.query.sid as string;
  console.log('sid', sid);
  if (sid) {
    const api = `http://localhost:8000/sunnyhouse/user?sid=${sid}`;
    console.log(api);
    Vue.axios.get(api).then((response) => {
      const data = response.data;
      console.log('data->', response.data);
      if (data.code === 'SUCCESS' && data.data !== 'null') {
        user.set(data.data);
        next();
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

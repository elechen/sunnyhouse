import Vue from 'vue';
import Router, { Route } from 'vue-router';
import Home from '@/views/Home.vue';
import * as user from '@/models/user';
import * as define from '@/defines/define';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '阳光公寓-首页',
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        title: '阳光公寓-关于',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
      meta: {
        title: '阳光公寓-登录',
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue'),
      meta: {
        title: '阳光公寓-信息',
      },
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: () => import(/* webpackChunkName: "agreement" */ './views/Agreement.vue'),
      meta: {
        title: '阳光公寓-协议',
      },
    },
    {
      path: '/manager',
      name: 'manager',
      component: () => import(/* webpackChunkName: "manager" */ './views/Manager.vue'),
      meta: {
        title: '阳光公寓-管理',
      },
    },
    {
      path: '/contract',
      name: 'contract',
      component: () => import(/* webpackChunkName: "contract" */ './views/Contract.vue'),
      meta: {
        title: '阳光公寓-合约',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ './views/Register.vue'),
      meta: {
        title: '阳光公寓-注册',
      },
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "order" */ './views/Order.vue'),
      meta: {
        title: '阳光公寓-账单',
      },
    },
    {
      path: '/genorder',
      name: 'genorder',
      component: () => import(/* webpackChunkName: "genorder" */ './views/GenOrder.vue'),
      meta: {
        title: '阳光公寓-账单',
      },
    },
  ],
});

router.beforeEach((to: Route, from: Route, next) => {
  const sid = to.query.sid as string;
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (sid) {
    const host = define.API_HOST;
    const api = `${host}/sunnyhouse/user?sid=${sid}`;
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

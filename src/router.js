import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';
import Detail from './views/Detail.vue';
import Order from './views/Order.vue';
import OrderComplete from './views/OrderComplete.vue';
import OrderCheck from './views/OrderCheck.vue';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/detail/:key',
      name: 'detail',
      component: Detail,
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      props: true,
    },
    {
      path: '/orderComplete',
      name: 'orderComplete',
      component: OrderComplete,
    },
    {
      path: '/orderCheck',
      name: 'orderCheck',
      component: OrderCheck,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});

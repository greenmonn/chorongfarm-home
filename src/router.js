import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';
import Detail from './views/Detail.vue';
import Order from './views/Order.vue';

Vue.use(Router);

export default new Router({
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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/detail',
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
      path: '*',
      component: NotFound,
    },
  ],
});

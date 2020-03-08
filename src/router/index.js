import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PastTrials from '../views/PastTrials.vue';
import How from '../views/How.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/past-trials',
    name: 'Past Trials',
    component: PastTrials
  },
  {
    path: '/how',
    name: 'How',
    component: How
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

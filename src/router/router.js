import { createWebHistory, createRouter } from 'vue-router';
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import Register from '../pages/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    props(route) {
      console.log('route; ', route)
      return {league: route.query.league}
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

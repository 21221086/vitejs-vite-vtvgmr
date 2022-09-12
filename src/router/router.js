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
    path: '/registration',
    name: 'Register',
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

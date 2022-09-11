import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./components/FrontPage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./components/FrontPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

createApp(App).mount('#app');

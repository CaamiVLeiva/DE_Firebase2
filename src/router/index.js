import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import SignUp from '@/views/SignUp.vue';
import { auth } from '@/firebaseConfig';

const routes = [
  { path: '/', redirect: '/signup' },
  { path: '/signup', component: SignUp },
  { path: '/login', component: LoginView },
  { path: '/home', component: HomeView, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const user = auth.currentUser;
    if (user) {
      next();
    } else {
      next('/login'); // Cambia aquí para redirigir a la página de inicio de sesión
    }
  } else {
    next();
  }
});

export default router;

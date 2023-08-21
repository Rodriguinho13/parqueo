import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Employees from '@/views/Employees.vue'; // Importa la vista de Empleados
import Areas from '@/views/Areas.vue'; // Importa la vista de Áreas
import Types from '@/views/Types.vue'; // Importa la vista de Tipos

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // Agrega rutas para las vistas de Empleados, Áreas y Tipos
  {
    path: '/employees',
    name: 'employees',
    component: Employees
  },
  {
    path: '/areas',
    name: 'areas',
    component: Areas
  },
  {
    path: '/types',
    name: 'types',
    component: Types
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;


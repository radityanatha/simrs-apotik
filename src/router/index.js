import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import DashboardAdmin from '../views/admin/dashboard.vue'
import AntrianPetugas from '../views/petugas/antrian.vue'

const routes = [
  { path: '/', name: 'Login', component: Login },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: DashboardAdmin,
  },
  {
    path: '/petugas/antrian',
    name: 'PetugasAntrian',
    component: AntrianPetugas,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

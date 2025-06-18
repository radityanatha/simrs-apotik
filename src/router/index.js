import { createRouter, createWebHistory } from 'vue-router'

// Import views
import Login from '../views/login.vue'
import DashboardAdmin from '../views/admin/dashboard.vue'
import AntrianPetugas from '../views/petugas/antrian.vue'
import StokObatPetugas from '../views/petugas/stokObat.vue'

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
  {
    path: '/petugas/stok-obat',
    name: 'PetugasStokObat',
    component: StokObatPetugas,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

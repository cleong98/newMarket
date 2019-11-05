import Vue from 'vue'
import VueRouter from 'vue-router'

//pages import start
const Dashboard = () => import('@/views/Dashboard')
const Admin = () => import('@/views/Admin')
const EditCategory = () => import('@/views/EditCategory')

//pages import end


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    component: Admin,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'category/edit',
        component: EditCategory
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

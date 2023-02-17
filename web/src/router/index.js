import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import  AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/login',
    },
    {
      path:'/login',
      name:'login',
      component: LoginView
    },
    {
      path:'/dashboard',
      component: () => import('../views/DashboardView.vue'),
      children:[
        {
          path:'',
          name:'home',
          component: () => import('../views/dashboard/HomeView.vue')
        },
        {
          path: 'overview',
          children: [
            {
              path: 'permissions',
              name:'overview-permissions',
              component: () => import('../views/dashboard/overview/PermissionsOverviewView.vue')
            },
            {
              path: 'machine',
              name:'overview-machine',
              component: () => import('../views/dashboard/overview/MachineOverviewView.vue')
            },
            {
              path: 'concept',
              name:'overview-concept',
              component: () => import('../views/dashboard/overview/ConceptOverviewView.vue')
            },
            {
              path: 'repo-config',
              name:'overview-repo-config',
              component: () => import('../views/dashboard/overview/RepoConfigOverviewView.vue')
            },
          ]
        },
        {
          path:'permission-control',
          children:[
            {
              path: 'group',
              name: 'permission-control-group',
              component: () => import('../views/dashboard/permission-control/GroupMgmtView.vue')
            },
            {
              path: 'member',
              name: 'permission-control-member',
              component: () => import('../views/dashboard/permission-control/MemberMgmtView.vue')
            },
          ]
        },
        {
          path:'biz-concept',
          children:[
            {
              path: 'machine',
              name: 'biz-concept-machine',
              component: () =>import('../views/dashboard/biz-concept/MachineView.vue')
            },
            {
              path: 'group',
              name: 'biz-concept-group',
              component: () =>import('../views/dashboard/biz-concept/GroupView.vue')
            },
            {
              path: 'safe-group',
              name: 'biz-concept-safe-group',
              component: () =>import('../views/dashboard/biz-concept/SafeGroupView.vue')
            },
            {
              path: 'res-pool',
              name: 'biz-concept-res-pool',
              component: () =>import('../views/dashboard/biz-concept/ResPoolView.vue')
            },
          ]
        },
        {
          path:'config',
          children:[
            {
              path: 'repo',
              name: 'config-repo',
              component: () => import('../views/dashboard/config/RepoView.vue'),
            },
            {
              path: 'vcs',
              name: 'config-vcs',
              component: () => import('../views/dashboard/config/VCSView.vue'),
            },
          ]
        },
        {
          path:'audit',
          name:'audit',
          component: () => import('../views/dashboard/AuditView.vue')
        },
        {
          path: 'about-me',
          name: 'about-me',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/dashboard/AboutMeView.vue')
        },
      ]
    },
    {
     path:'/about',
      name:'about',
      component: AboutView
    },
  ]
})

export default router

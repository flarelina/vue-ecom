
const routes = [
  {
    path: '/',
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      { path: '/', name: 'landing', component: () => import('pages/landing/LandingPage.vue') },
      { path: '/home', name: 'home', component: () => import('pages/home/Index.vue') },
      { path: '/list', name: 'list', component: () => import('pages/home/List.vue') },
      { path: '/create', name: 'create', component: () => import('pages/home/Create.vue') }
    ],
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: 'items', name: 'dashboard-items', component: () => import('pages/dashboard/items/ItemsPage.vue') }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

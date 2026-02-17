import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

{
  path: '/',
  name: 'home',
  component: '../views/Home.vue',
},
{
    path: '/drama',
  name: 'drama',
  component: '../views/Drama.vue',
  
},
{
  path: '/accion',
  name: 'accion',
  component: '../views/Accion.vue',
},
{
    path: '/comedia',
  name: 'comedia',
  component: '../views/Comedia.vue',
},


  ],
})

export default router

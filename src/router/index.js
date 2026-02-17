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
  component:()=> import('../views/Drama.vue'),
  
},
{
  path: '/accion',
  name: 'accion',
  component:()=> import('../views/Accion.vue'),
},
{
    path: '/comedia',
  name: 'comedia',
  component:()=> import('../views/Comedia.vue'),
},
{
  path: '/infoPeli/:id',
  name: 'infoPeli',
  component:()=> import('../views/infoPeli.vue'),
},


  ],
})

export default router

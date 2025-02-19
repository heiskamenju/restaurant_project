import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/home-page.vue'
import About from '@/components/about.vue' 
import Contact from '@/components/contact.vue' 
import feedback from '@/components/feedback.vue'   
import menu from '@/components/menu.vue' 
import order from '@/components/order.vue'   
import restaurantlist from '@/components/restaurantlist.vue'   

//route array of objects: path, component

const routes = [
    {
        path: '/',  
        component: HomePage
    },
    {
        path: '/about',  
        component: About
    },
    {
        path: '/contact',  
        component: Contact
    },
    {
        path: '/feedback',  
        component: feedback
    },
    {
        path: '/menu',  
        component: menu
        
    },
    {
        path: '/order',  
        component: order
    },
    {
        path: '/restaurantlist',  
        component: restaurantlist
    },   
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router

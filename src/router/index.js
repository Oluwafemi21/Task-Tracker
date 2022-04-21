import { createRouter, createWebHistory} from 'vue-router'

//Import component to be used as a route
import HomePage from '../views/Home.vue'
import AboutPage from '../views/About.vue'

//create the routes
const routes = [
    {
        path:'/',
        name:'HomePage',
        component:HomePage,
    },
    {
        path:'/about',
        name:'AboutPage',
        component:AboutPage,
    },
]

//Set up the router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router
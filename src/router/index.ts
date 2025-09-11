import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/projects', name: 'Projects', component: Projects },
]

const router = createRouter({
    history: createWebHistory('/Portfolio/'),
    routes
})

// Handle SPA routing for GitHub Pages
router.beforeEach((to, from, next) => {
    // If the route has a query parameter starting with '/', it's from the 404.html redirect
    if (to.query && to.query['/']) {
        const path = to.query['/'] as string
        // Remove the leading slash if present
        const cleanPath = path.startsWith('/') ? path.slice(1) : path
        // Navigate to the actual route
        next({ path: '/' + cleanPath, replace: true })
    } else {
        next()
    }
})

export default router

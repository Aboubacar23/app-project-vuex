import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Movie from "@/views/movie.vue";


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/notes',
        name: 'notes',
        component: () =>
            import ('../views/Notes.vue')
    },
    {
        path: '/movies',
        name: 'movies',
        component: () =>
            import ('../views/movies')
    },
    {
        name: 'movie',
        path: '/movie/:id',
        component: Movie,
        props: true
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
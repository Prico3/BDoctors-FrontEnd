import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue'
import AppDocPage from './pages/AppDocPage.vue';
// import AppAbout from './pages/AppAbout.vue';
// import AppService from './pages/AppService.vue';
import AppNotFound from './pages/AppNotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: AppHome,
        },

        {
            path: "/doc",
            name: "docPage",
            component: AppDocPage,
        },
        //     {
        //         path: "/chi-siamo",
        //         name: "about",
        //         component: AppAbout,
        //     },
        //     {
        //         path: "/servizi",
        //         name: "service",
        //         component: AppService,
        //     },

        // da mettere alla fine 
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: AppNotFound,
        }
    ]
});

export { router };
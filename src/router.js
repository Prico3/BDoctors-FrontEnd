import { createRouter, createWebHistory } from "vue-router";
import AppDocPage from './components/AppDocPage.vue';
// import AppAbout from './pages/AppAbout.vue';
// import AppService from './pages/AppService.vue';
// import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: "/doctor",
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

        //     // da mettere alla fine 
        //     {
        //         path: "/:pathMatch(.)",
        //         name: "not-found",
        //         component: NotFound,
        //     }
    ]
});

export { router };
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import Borrar from "@/view/Borrar.vue";
import Actualizar from "@/view/Actualizar.vue";
import Consultar from "@/view/Consultar.vue";
import Insertar from "@/view/Insertar.vue";
import productStock from "@/view/productStock.vue";

const routes = [

    {
        path:'/',
        name:'home',
        component:Home

    },
    {
        path:'/insertar',
        name:'insertar',
        component:Insertar
    },
    {
        path:'/consultar',
        name:'consultar',
        component:Consultar
    },
    {
        path:'/actualizar',
        name:'actualizar',
        component:Actualizar
    },
    {
        path:'/borrar',
        name:'borrar',
        component:Borrar
    },
    {
        path:'/productStock',
        name:'productStock',
        component:productStock
    }


]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
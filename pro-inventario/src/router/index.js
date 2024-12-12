import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/Home.vue";
import Borrar from "@/view/Borrar.vue";
import Actualizar from "@/view/Actualizar.vue";
import Consultar from "@/view/Consultar.vue";
import insertarStock from "@/view/InsertarStock.vue";
import insertarProduct from "@/view/insertarProduct.vue";
import productStock from "@/view/productStock.vue";

const routes = [

    {
        path:'/',
        name:'home',
        component:Home

    },
    {
        path:'/insertarStock',
        name:'insertarStock',
        component:insertarStock
    },
    {
        path:'/insertarProduct',
        name:'insertarProduct',
        component:insertarProduct
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
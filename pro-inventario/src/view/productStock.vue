<template>
    <Miheader></Miheader>
    <h1>Historial de movimientos de inventario</h1>
    <div v-if="cargaDatos"> Cargando datos</div>
    
    <table>
        <tr>
           
            <th>id</th>
            <th>Referencia</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Tipo de movimiento</th>
            <th>Fecha de creación</th>
            
        </tr>
        <tr v-for="(item, index) in data" :key="index">
        
            <td >{{item.id}}</td>
            <td >{{item.product.reference}}</td>
            <td >{{item.product.name}}</td>
            <td >{{item.quantity}}</td>
            <td >{{item.type}}</td>
            <td >{{item.create_date}}</td>
        </tr>


    </table>
</template>

<script setup>
import Miheader from '@/components/Miheader.vue';
import {ref, onMounted} from 'vue';

const data = ref([])
const cargaDatos = ref(true)
const mensaje = ref(null)

const consultarDatosProductStock= async() => {
    try {
        const response = await fetch("http://localhost:8080/api/product-stock")
        if (!response.ok) {
            throw new Error("No pudo consultar los datos");
            
        }
        const responseData = await response.json()
        data.value = responseData.sort((a,b) => b.id - a.id)
    } catch (error) {
        mensaje.value = error.mensaje
    }finally{
        cargaDatos.value = false
    }
    
}
onMounted(() => {
        consultarDatosProductStock()
    })
</script>

<style>

h1{

color: #000000;

margin: auto;

font-size: 25px;

font-weight: bold;

margin-top: 20px;

margin-bottom: 20px;

width: 50%;

text-align: center;

}

table {

border-collapse: collapse;

width: 50%;

margin: auto;

}

th, td {

border: 2px solid #091258;

padding: 8px;

text-align: left;

}

th {

background-color: #4DB79E;

font-weight: bold;

}

</style>
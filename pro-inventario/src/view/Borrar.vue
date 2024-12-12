<template>

    <Miheader></Miheader>

    <fieldset>
        <label id="title">Registro de Productos</label>
        <form @submit.prevent="buscarProduct">
            <div>
                <label for="reference">Referencia</label>
                <input type="text" v-model="reference" required>
            </div>
            
            <section v-if="producto">
                <div>Nombre del producto</div>
                <div>{{producto[0].name}}</div>
                <button @click="eliminarProduct">Eliminar</button>

            </section>

            <div>
                <button type="submit">Buscar</button>
            </div>

        </form>
        <div>{{mensaje }}</div>
    </fieldset>
    
</template>

<script setup>
import Miheader from '@/components/Miheader.vue';
import Swal from 'sweetalert2';
import { ref } from 'vue';

const id_product = ref("")
const reference = ref("")
const name = ref("")
const producto = ref(null)
const mensaje = ref(null)

const buscarProduct=async()=>{

    try {
        const datosProduct = await fetch(`http://localhost:8080/api/products/reference/${reference.value}`,{
            method: "GET"
        })
    if (!datosProduct.ok) {
        console.log("no encontró ")
        throw new Error("No se encontró la referencia");
    
    }
        producto.value = await datosProduct.json()
        id_product.value = producto.value[0].id
        //mensaje.value = "Consultado"
    }catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error al consultar los datos",
            text: "Error",
            confirmButtonText: "Aceptar",
        });
        mensaje.value = error.mensaje
    }





}

const eliminarProduct = async()=>{
    try {
        
        const eliminarResponse = await fetch(`http://localhost:8080/api/products/delete/${id_product.value}`,{
            method:"DELETE"
        })

        

        if (!eliminarResponse.ok) {
            Swal.fire({
            icon: "error",
            title: "Error al eliminar los datos",
            text: "Error",
            confirmButtonText: "Aceptar",
        });    
            throw new Error("Error al eliminar el producto");
        }
        Swal.fire({
            title: "Realizado",
            text: "Producto eliminado",
            icon: "success",
            confirmButtonText: `
                <i class="fa fa-thumbs-up"></i> Ok!
            `,
        });
        //mensaje.value= "Producto eliminado"

    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error al eliminar los datos",
            text: "Error",
            confirmButtonText: "Aceptar",
        });
        mensaje.value= error.mensaje 
    }
}

</script>
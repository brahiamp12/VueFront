<template>

    <Miheader></Miheader>

    <fieldset>
        <label id="title">Registro de Productos</label>
        <form @submit.prevent="buscarProduct">
            <div>
                <label for="reference">Referencia</label>
                <input type="text" v-model="reference" required>
            </div>
            <div>
                <button type="submit">Buscar</button>
            </div>
        </form>
        <form @submit.prevent="actualizarProduct">
            <br>
            <div>Información del producto</div>
            <section v-if="producto && producto.length > 0">
                <div>
                    <label for="">Referencia</label>
                    <input type="text" v-model="producto[0].reference" disabled>
                </div>
                
                <div>
                    <label for="">Nombre</label>
                    <input type="text" v-model="producto[0].name">
                </div>
                

                    <button type="submit">Actualizar</button>
            

            </section>
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
    console.log(datosProduct)
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

const actualizarProduct=async()=>{
    try {
        console.log(id_product.value)
        console.log(producto.value)
        const datosProduct = await fetch(`http://localhost:8080/api/products/update/${id_product.value}`,{
            method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(producto.value[0])
        })
        console.log(datosProduct)
        
        if (!datosProduct.ok) {
            throw new Error("Error al actualizar");
            
        }
        Swal.fire({
            title: "Realizado",
            text: "Producto Actualizado",
            icon: "success",
            confirmButtonText: `
                <i class="fa fa-thumbs-up"></i> Ok!
            `,
        });
        //mensaje.value = "Registro exitoso"
        producto.value= {
            reference:"",
            name: ""
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error al Actualizar los datos",
            text: "Error",
            confirmButtonText: "Aceptar",
        });
        mensaje.value= error.mensaje 
    }
}




</script>
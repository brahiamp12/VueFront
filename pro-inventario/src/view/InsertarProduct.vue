<template>

    <Miheader></Miheader>
    <fieldset>
        <label id="title">Registro de Productos</label>
        <form @submit.prevent="insertarProduct">

          
           
            <div>
                <label for="referencia">Referencia</label>
                <input type="text" v-model="frm.reference">
            </div>
            <div>
                <label for="name">Nombre</label>
                <input type="text"  v-model="frm.name">
            </div>

            <div>
                <button type="submit">Registrar</button>
            </div>

        </form>
        <div>{{mensaje }}</div>
    </fieldset>
    
</template>

<script setup>
import Miheader from '@/components/Miheader.vue';
import Swal from 'sweetalert2';
import {ref, onMounted} from 'vue';

const frm = ref({
    
    reference:"",
    name: ""
})



const mensaje= ref("")
const insertarProduct =async()=>{
    try {
        const response = await fetch("http://localhost:8080/api/products",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(frm.value)
            }
        )
        
            console.log(response)
        if (!response.ok) {
            throw new Error("No se registraron los datos");
            
        }

        Swal.fire({
            title: "Realizado",
            text: "Producto Ingresado",
            icon: "success",
            confirmButtonText: `
                <i class="fa fa-thumbs-up"></i> Ok!
            `,
        });
        mensaje.value= "registro exitoso"
        frm.value= {
            reference:"",
            name: ""
        }
        
    } catch (error) {
        console.log(error)
        mensaje.value = error.mensaje
        Swal.fire({
            icon: "error",
            title: "Error al registrar",
            text: "Error",
            confirmButtonText: "Aceptar",
        });
    }finally{
        cargaDatos.value = false
    }
}



const data = ref([])
const cargaDatos = ref(true)

const consultarProducts= async() => {
    try {
        const response = await fetch("http://localhost:8080/api/products")
        if (!response.ok) {
            throw new Error("No pudo consultar los datos");
            
        }
        data.value = await response.json()
    } catch (error) {
        mensaje.value = error.mensaje
    }finally{
        cargaDatos.value = false
    }
    
}
onMounted(() => {
    consultarProducts()
    })

</script>


<style>
   fieldset{
    border: 0;
    margin-top: 50px;
    border-radius: 5px;
    padding: 20px;
    max-width: 500px;
    margin: auto;
    background-color: #e9e9e9;
    width: 70%;
    padding: 30px;
    height: 450px;
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.5),
                0 10px 30px rgba(0, 0, 0, 0.3),
                0 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;


   }
   label{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 14px;
   }

  
   
   legend{
    color: #070130FF;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    padding: 0 10px;

   }
   form{
    display: flex;
    flex-direction: column;
    gap: 15px;
   }
   div{
    display: flex;
    flex-direction: column;
   }
   label{
    display: flex;
    flex-direction: column;
   }

   input{
    border: 1 solid green;
    padding: 8px;
    font-size: 1rem;
    margin-bottom: 20px;
    outline: none;
    transition: border-color 0.3s;
   }

   div[v-if]{
    margin-top: 10px;
    color: #004aad;
    font-weight: bold;
    text-align: center;
   }
   #cant{
    text-align: center;
    width: 10%;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    text-align: center;
   }

   #title{
    font-weight: bold;
    text-align: center;
    font-size: 1.8em;
   }
</style>
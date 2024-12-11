<template>

    <Miheader></Miheader>
    <fieldset>
        <label id="title">Registro de Inventario</label>
        <form @submit.prevent="insertarProductStock">

            <div>
                <label for="">Referencia</label>
                <select v-model="frm.product.id" required>
                    <option v-for="(item, index) in data" :key="index" :value="item.id">
                        {{item.reference}} - {{item.name}}
                    </option>
                </select>
            </div>
            <div>
                <label for="">Tipo de movimiento</label>
                <select v-model="frm.type" name="" id="">
                    <option value="Entrada">Entrada</option>
                    <option value="Salida">Salida</option>
                </select>
            </div>
            <div>
                <label for="cantidad">Cantidad</label>
                <input id="cant" type="number" min="1" step="1" v-model="frm.quantity">
            </div>
            <div>
                <label for="fecha">Fecha</label>
                <input type="date" name="" id="" v-model="frm.create_date">
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
    product:{
        id:""
    },
    type: "",
    quantity:"",
    create_date: "",
    employee:{
        id:1
    }
    

})



const mensaje= ref("")
const insertarProductStock =async()=>{
    try {
        const response = await fetch("http://localhost:8080/api/product-stock",
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
            throw new Error("Np se registraron los datos");
            
        }

        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            confirmButtonText: `
                <i class="fa fa-thumbs-up"></i> Ok!
            `,
        });
        mensaje.value= "registro exitoso"
        frm.value= {
            product: {
                id: null
            },
            type: "",
            quantity: null,
            create_date: "",
            employee: {
                id: null
            }}
        
    } catch (error) {
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
        console.log(data)
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
    background-color: #ffffff;
    width: 70%;
    padding: 30px;
    height: 400px;
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.5),
                0 10px 30px rgba(0, 0, 0, 0.3),
                0 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;


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

   button{
    background-color: #00002CFF;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    margin-top: 50px;
    cursor: pointer;
    transition: background-color 0.3s;
    
   }
    button:hover{
        background-color: #0BE6F6FF;
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
    font-size: 1.5rem;
   }
</style>
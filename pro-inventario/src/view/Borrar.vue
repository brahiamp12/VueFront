<template>

    <Miheader></Miheader>
    
</template>

<script setup>
import Miheader from '@/components/Miheader.vue';
import { ref } from 'vue';

const id = ref("")
const mensaje = ref(null)

const buscarProduct=async()=>{
    const datosProduct = fetch("http://localhost:8080/api/products")
}



</script>
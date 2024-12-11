<template>
    <h1>{{ contador }}</h1>
    <button @click="MiContador">+</button>

</template>

<script setup>

import { ref } from 'vue';
let contador = ref(0)
const MiContador= () =>{
    contador.value ++
}

</script>
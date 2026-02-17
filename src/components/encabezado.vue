<script setup>
// No es estrictamente necesario importar RouterLink si ya usas el router en main.js, 
// pero tampoco hace daño dejarlo.
import { RouterLink } from 'vue-router';

defineProps ({
    app:{
        type:String,
        required:true,
    },
})
</script>

<template>
    <div class="logo">
        <RouterLink to="/" class="logo-link">
            <h1>{{ app }}</h1>
        </RouterLink> </div>
</template>

<style scoped>
.logo {
    background-color: rgb(143, 146, 148);
    margin: 0;
    /* Centramos el contenido por si acaso */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Estilo para quitar el subrayado y color azul típico de los enlaces */
.logo-link {
    text-decoration: none;
    color: blueviolet; /* Movemos el color aquí para que el enlace lo tome */
}

h1 {
    font-size: 1.8rem;
    letter-spacing: -1px;
    margin: 0;
}

* {
    box-sizing: border-box;
}
</style>
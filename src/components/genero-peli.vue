<script setup>
defineProps({
    genero:{
        type:String,
        required:true,
    },
})
</script>
<template>
<div class="nombre-genero">
    <h2 class="genero">{{ genero }}</h2>
</div>

</template>
<style>
.nombre-genero h2{
    text-align: left;
    color: blueviolet;
}

</style>
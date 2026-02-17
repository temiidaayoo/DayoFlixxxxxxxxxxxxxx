<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted, ref } from 'vue';
import Encabezado from './components/encabezado.vue';
import Footer from './components/footer.vue';
import { idAnimes, getAnimeInfo } from './assets/scripts/utils';

let animeData= ref ([])

onMounted (async () => {
  for( const anime of idAnimes){
    animeData.value.push(await getAnimeInfo(anime))
console.table(animeData.value[0].Genre)
 }
  
})

</script>

<template>
<div class="contenedor">
  <Encabezado app="DAYOFLIX"/>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/drama">Drama</RouterLink>
    <RouterLink to="/accion">Acción</RouterLink>
    <RouterLink to="/comedia">Comedia</RouterLink>
      </nav>



<main class="contenido">
<RouterView />

</main>

    <Footer despedida="Gracias por confiar en DAYOFLIX"
    copyright="2026 DayoFlix. Todos los derechos reservados. 
    Prohibida la reproducción total o parcial del contenido sin autorización."/>
    
</div>

</template>

<style scoped>
nav{
display: flex;  
gap: 15px;
}


nav a{
  color:#333;
  border-radius: 20px;
}

nav a:hover{
  background-color: #f1f1f1;
  color: blueviolet;
}

.contenedor{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.contenido{
  flex: 1;
}



</style>

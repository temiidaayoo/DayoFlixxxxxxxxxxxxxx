<script setup>
import { onMounted, ref } from 'vue';
import MovieCard from '@/components/MovieCard.vue';
import { idAnimes, getAnimeInfo } from '../assets/scripts/utils';

let animeData= ref ([])

onMounted (async () => {
  for( const anime in idAnimes){
    const animeInfo = await getAnimeInfo(anime)
    if (animeInfo.Genre && animeInfo.Genre.includes('Action')){
        animeData.value.push(animeInfo)
    }

  }
    
})

</script>
<template>
    <main>
        <div class="genero-container">
            <h1 class="genero">Accion</h1>
            <div class="container-anime">

            <MovieCard 
            v-for="anime in animeData"
            :key="anime.imdbID"
            :poster="anime.Poster"
            :title="anime.Title"
            :id="anime.imdbID"
            />

            </div>

        </div>
    </main>
</template>
<style scoped>
.genero-container {
  background-color: black;
  padding: 20px;
}

.genero {
  text-align: left;
  color: plum;
  margin-bottom: 20px;
}

.container-anime {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  gap: 20px;
}
</style>
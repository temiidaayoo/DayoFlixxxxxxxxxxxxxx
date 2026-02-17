<script setup>
import  MovieCard from '@/components/MovieCard.vue';
import { onMounted,ref } from 'vue';
import { idAnimes, getAnimeInfo } from '@/assets/scripts/';

const animeData = ref ([])

onMounted (async () => {
    for(const anime of idAnimes){
        animeData.value.push(await getAnimeInfo(anime))
    }
    
})



</script>
<template>
    <main>
        <div class="bienvenida">
            <h1>Bienvenido a DAYOFLIX</h1>
        </div>
        <div class="container-animes">
            <MovieCard
            v-for="anime in animeData"
            :key="anime.imdbID"
            :poster="anime.Poster"
            :title="anime.Title"
            :id="anime.imdbID"
            />
        </div>
    </main>
</template>
<style>
main{
    background-color: #141414;
}

.bienvenida {
  padding: 20px;
}

.bienvenida h1 {
  color: plum;
  text-align: center;
  margin-bottom: 20px;
}

.container-animes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  gap: 20px;
}

@media (max-width: 1024px) {
  .container-animes {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .container-animes {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .container-animes {
    grid-template-columns: 1fr;
  }
}
</style>
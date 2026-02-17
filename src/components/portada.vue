<script setup>
import { onMounted, ref } from 'vue';
import MovieCard from './MovieCard.vue';
import { idAnimes, getAnimeInfo } from '../assets/scripts/utils';

let animeData = ref ([])

onMounted (async () => {
    for( const anime of idAnimes) {
        animeData.value.push(await getAnimeInfo(anime))
    }
    
})


</script>
<template>
    <div class="portada">
        <h1>Bienvenido a DayoFlix</h1>
        <div class="container-animes">
            <MovieCard
            v-for="anime in animeData"
            :key="anime.imdbID"
            :poster="anime.Poster"
            :title="anime.Title"
            :id="anime.imdbID"
            />
        </div>
    </div>


</template>
<style>

.container-animes{
    display:grid;
    grid-template-columns: (4, 1fr);
    grid-auto-rows: 400px;
    gap: 20px;
}


</style>
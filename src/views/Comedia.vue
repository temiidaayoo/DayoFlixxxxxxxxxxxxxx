<script setup>
import { onMounted, ref } from 'vue';
import MovieCard from '@/components/MovieCard.vue';
import { idAnimes, getAnimeInfo } from '../assets/scripts/utils';

let animeData= ref ([])

onMounted (async () => {
  for( const anime in idAnimes){
    const animeInfo = await getAnimeInfo(anime)
    if (animeInfo.Genre && animeInfo.Genre.includes('Comedy')){
        animeData.value.push(animeInfo)
    }

  }
    
})

</script>
<template>
    <main>
        <div class="genero-container">
            <h1> class</h1>

        </div>
    </main>
</template>
<style></style>
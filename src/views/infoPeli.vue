<script setup>

import { ref, onMounted } from 'vue';
import { getAnimeInfo } from '@/script/utils';


    const props = defineProps({
        id:{
            type:String,
            required:true,
        },
    })

    const anime = ref (null)
    const loading = ref (true)

    onMounted (async () => {
        anime.value = await getAnimeInfo(props.id)
        loading.value = false
        
    })


</script>




    <template>
  <div class="info-anime">
    <div v-if="loading" class="loading">Cargando...</div>
    <div v-else-if="anime" class="anime-details">
      <div class="poster">
        <img :src="anime.Poster" :alt="anime.Title" />
      </div>
      <div class="details">
        <h1>{{ anime.Title }}</h1>
        <p class="year"><strong>Año:</strong> {{ anime.Year }}</p>
        <p class="genre"><strong>Género:</strong> {{ anime.Genre }}</p>
        <p class="director"><strong>Director:</strong> {{ anime.Director }}</p>
        <p class="actors"><strong>Actores:</strong> {{ anime.Actors }}</p>
        <p class="plot"><strong>Sinopsis:</strong> {{ anime.Plot }}</p>
        <p class="rating"><strong>Puntuación:</strong> {{ anime.imdbRating }}/10</p>
        <p class="runtime"><strong>Duración:</strong> {{ anime.Runtime }}</p>
      </div>
    </div>
  </div>

</template>



<style scoped>
.info-anime {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: plum;
}

.anime-details {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.poster img {
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.details {
  flex: 1;
  min-width: 300px;
  color: white;
}

.details h1 {
  color: plum;
  margin-bottom: 20px;
}

.details p {
  margin: 10px 0;
  line-height: 1.6;
}

.details strong {
  color: plum;
}

@media (max-width: 768px) {
  .movie-details {
    flex-direction: column;
    align-items: center;
  }
  
  .poster img {
    max-width: 100%;
  }
}
</style>
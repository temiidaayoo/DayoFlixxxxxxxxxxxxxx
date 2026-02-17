<script setup>
defineProps({
    poster:String,
    title:String,
    id:String,
})
</script>
<template>

    <RouterLink :to="{ name: 'infoPeli', params:{id:id}}" class="card-movie">
        <img :src="poster" :alt="title">
        <div class="info">
            <h3>{{ title }}</h3>
        </div>

    </RouterLink>

</template>
<style scoped>
.card-movie{
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    border-radius: 8px;
    overflow: hidden;
}

.card-movie img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.info{
    background: rgba(0, 0, 0, 0.7);
    color: white;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 10px;
}

</style>
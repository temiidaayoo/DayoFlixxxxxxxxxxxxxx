<script setup>
defineProps ({
    app:{
        type:String,
        required:true,
    },
})
</script>
<template>

<div class="logo">
    <h1>{{ app }}</h1>
</div>

</template>
<style scoped>
.logo{
    color: blueviolet;
    background-color: rgb(143, 146, 148);
    font-size: 1.8rem;
    margin: 0;
    letter-spacing: -1px;
}

*{
    box-sizing: border-box;
}

</style>
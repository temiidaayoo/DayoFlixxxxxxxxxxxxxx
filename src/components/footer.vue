<script setup>
defineProps({
    despedida:{
        type:String,
        required:true,
    },
    copyright:{
        type:String,
        required:true,
    }
})




</script>
<template>

<div class="footer">
    <h1>{{ despedida }}</h1>
    <p class="copyright">{{ copyright }}</p>
</div>

</template>
<style>
h1{
    font-size: medium;
    position: relative;
    color: blueviolet;
    font-weight: 300;
}

.footer{
    background-color: rgb(143, 146, 148);
    text-align: left;
    padding: 4px;
}

p{
    text-align: justify;
}

*{
    box-sizing: border-box;
}
</style>
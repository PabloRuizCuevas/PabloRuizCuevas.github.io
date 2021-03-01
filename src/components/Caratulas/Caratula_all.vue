
<template>

    <div class="container" >
     
        <div> published on  {{dict.date}} </div>
        <h1 >   {{dict.title}} </h1>
        <div class="image">
            <img alt="geometry" :src="`${dict.picture}`">
        </div>
        <p v-html= "`${dict.summary}`" >  </p>
        <a> Read - {{dict.read_time}} </a>
        
    </div>

</template>


<script>

    export default {
        name: 'Caratula',
        components: {
        },
        props: {
            dict: Object,
        },
    }

</script>


<style scoped>

    .container{
        display: flex;
        flex-wrap:       wrap;
        flex-direction: column;
        max-width: 100%;
        border-bottom: solid rgb(218, 216, 216) ;
        border-width: thin;
        margin-top: 60px;
    }



    .image , img{
        min-width: 100%;
        margin-top: 15 px ;
        height: auto;
    }

</style>

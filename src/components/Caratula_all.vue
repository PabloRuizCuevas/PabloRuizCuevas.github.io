
<template>

    <div class="container" >
     
        <div> published on  {{dict.date}} </div>
        
        <h1 >   {{dict.title}} </h1> 

        <router-link :to="{ name: 'PageContainer', params: { datakey:dict.datakey , path:dict.path } }" >
           
            <div class="image">
                <img alt="geometry" :src="`${dict.picture}`">
            </div>
      
        </router-link>

        <p v-html= "`${dict.summary}`" >  </p>
        <p> Read - {{dict.read_time}} </p>
        
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
        min-height: 100%;
        border-bottom: solid rgb(218, 216, 216) ;
        border-width: thin;
        margin-top: 60px;
    }

    .image , img{
        min-width: 100%;
        margin-top: 15 px ; /* read two wimes */
        height: auto;
    }

</style>

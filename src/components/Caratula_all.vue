
<template>

    <div class="container" >
     
        <div> published on  {{dict.date}} </div>
        
        <router-link :to="{ name: 'PageContainer', params: {path:dict.path, datakey:dict.datakey } }" >

        <h1 style=" color: rgb(44, 62, 80);" >   {{dict.title}} </h1> 
        </router-link>
        <!--<router-link :to="{ name: 'PageContainer', params: { datakey:dict.datakey , path:dict.path } }" >-->
        <router-link :to="{ name: 'PageContainer', params: {path:dict.path, datakey:dict.datakey } }" >

            <!--<div class="image_container">
            </div>-->
            <img  :src="`${dict.picture}`">

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

    h1 {
        font-size: 2.5rem;
        line-height: 3.25rem;
        margin-bottom: 1.625rem;
        font-family: "Latin Modern";
        box-sizing: border-box
    }

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


    img {
        width: 100%;
        height: auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    a {
        display: flex;
        height: auto;
        color: #FFFFFF;
        text-decoration: none;
        margin-top: 15 px ; /* read two wimes */
        
    }

    p {
        display: block;
        text-align: justify;
        hyphens: auto;
        margin-top: 1rem;
        text-rendering: optimizelegibility;
    }


</style>

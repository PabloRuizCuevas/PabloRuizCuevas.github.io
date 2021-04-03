
<template>

    <div class="container" >
     
        <p> published on  {{dict.date}} </p>
        
        <router-link :to="{ name: 'PageContainer', params: {datakey:dict.datakey } }" >

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

    @media screen and (min-width: 1800px) { /* it looks good in iphone */
 
    }  

/*
    @media (min-resolution: 341dpi) and (min-width: 767px) {
        
    }

    @media (max-resolution: 131dpi) and (min-width: 767px) {

    }
*/
    .container{
        display: flex;
        flex-wrap:       wrap;
        flex-direction: column;
        max-width: 100%;
        min-height: 100%;
        border-bottom: solid rgb(218, 216, 216) ;
        border-width: thin;
        margin-top: 30px;
    }
    /*
    .image_container{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
    }
    */
    img {
        /*max-height:95px;*/
        width: 100vw;
        max-height: 400px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media screen and (max-width: 400px) { /* it looks good in iphone */
        img {
            width: 100vw;
            max-height: 200px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    }  


    a {
        display: flex;
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

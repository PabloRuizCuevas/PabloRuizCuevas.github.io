
<template>

    <div class="container" >

        <div> published on Feb 18 2021 </div>
        <h1 v-on:click="method"> Image analysis </h1>
        <div class="image">
            <img alt="geometry" src="../../images/transmision.png">
        </div>
        <p>
        To calculate the reduction factor from a image (matrix) we have developed a algorithm inspired in the Boostrap statistical method. The method consist in calculating the reduction factor using a random shaped region inside our region of interest, then we will calculate the reduction factor of this region, and choose a new random shaped region...
        </p>
        <a> Read - 12 min </a>
        
    </div>

</template>


<script>

    export default {
        name: 'Caratula',
        components: {
            
        },
        methods:{

        }
    }

</script>


<style scoped>

.container{
    display: flex;
    flex-wrap:       wrap;
    flex-direction: column;
    border-bottom: solid rgb(218, 216, 216) ;
    border-width: thin;
    margin-top: 60px;
}


img{
    width: 100%;
}

.image {
  width: 100%;
  margin-top:30px ;
  
}
</style>


<template>

    <div class="columns">
        <div id="pixelLeft"><Side class="side "/></div>
        <div id="bannerCenter">

            <div >
                <div v-if="page==1"> <Latexpage msg="First page"/> </div>
                <div v-if="page==2"> <Latexpage2 msg="First page"/> </div>
            </div>

            <div class="buttons">
                <button class="button1" @click="page += -1"> &lt; </button> 
                <button class="button1" @click="page += 1">   >    </button>
            </div>
            Page {{ page }}
            </div>
        <div id="pixelRight" ></div>
    </div>

</template>


<script>

    import Side from  '../components/Side.vue'

    import Latexpage from  '../components/Latexpage.vue'
    import Latexpage2 from  '../components/Latexpage2.vue'

    export default {
        name: 'PageContainer',
        components: {
            Latexpage,
            Latexpage2,
            Side,
        },
        props: {
            dict: Object,
        },
        data() {
            return {
                page1: true,
                page: 1,
            }
        },
        mounted() {

        },
        computed() {
        }



    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>

/*@import "../style/latex.css"; */


   #bannerCenter{
        margin-right: 260px
    }

  #pixelRight{  
        flex: 0.1
    }
    
@media screen and (max-width: 1200px) {

    #bannerCenter{
        margin-right: 0px
    }

    #pixelRight, #pixelLeft{  
        flex: 0.1
    }

    
}

@media screen and (max-width: 1000px) {

    #bannerCenter{
        margin-right: 0px
    }

    #pixelRight, #pixelLeft{  
        flex: 0.3
    }
}

@media screen and (max-width: 750px) {
    #pixelRight, #pixelLeft{  
        flex: 0.3
    }

}

@media screen and (max-width: 500px) {

}


.buttons{
    flex-direction: column;
}

.button1 {
    width: 50px;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: #4CAF50; /* Green */
    border: 2px solid #4CAF50; /* Green */
}

</style>

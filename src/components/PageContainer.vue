
<template>
    <div class="container" >
  
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

</template>


<script>

    import Latexpage from  '../components/Latexpage.vue'
    import Latexpage2 from  '../components/Latexpage2.vue'

    export default {
        name: 'PageContainer',
        components: {
            Latexpage,
            Latexpage2,
        },
        props: {
            msg: String
        },
        data() {
            return {
                page1: true,
                page: 1,
            }
        },
        mounted() {

        },


    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>


.container { 
  flex-wrap:       wrap;
  flex-direction: column;
  align-content: center;
  max-width: 60%;
}

@media screen and (max-width: 1000px) {
    .container{
        max-width: 75%;
        margin: 20px;
    }
}

@media screen and (max-width: 750px) {
    .container{
        max-width: 100%;
        margin: 20px;
    
    }
}

@media screen and (max-width: 500px) {
    .container{
      max-width: 80%;
      padding: 20px;
      marging: 0px;
    }
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


    @import 'https://latex.now.sh/style.css';
    @import "https://latex.now.sh/prism/prism.css";

</style>

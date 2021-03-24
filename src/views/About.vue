
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">-->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div class="columns">
        <div id="pixelLeft"><Side class="side "/></div>
        <div id="bannerCenter" >
          <div class="content" style="margin-top:40px">
            <p> This webpage is intended to summarize my work at FRMII, during the year I have worked at this great institution I have developed many useful skills both at python data analysis and compresension about fundamental physics. 
              
            The complexity of the topics and the deep implications on the fundamental physics motivated me to create this webpage. In this side I will try to share the knowdledge and the codes I build working at FRMII for over one year. 
            </p>

            <img src="../images/reactor.jpg">

            <p> The information shared in this website is specially related to one of the many experiments at the FRMII, the MIRAII experiment and the amazing research of M.Sc. Lukas Beddrich and Dr. Robert Georgii. Despite most of the information can be applied to a wide range of neutron scatter experiments. Enjoy :)
            </p>

            <p>
            You can find more information about MIRA at <a href="https://mlz-garching.de/mira" >https://mlz-garching.de/mira</a> and about the reactor at <a href="https://mlz-garching.de/mira">  https://www.frm2.tum.de/en/home/ </a>
            </p>

          </div>
        </div>
        <div id="pixelRight">&nbsp;</div>
    </div>

</template>


<script>

//import PageContainer from './components/PageContainer.vue'
import Side from '../components/Side.vue'

//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
   // PageContainer,
    Side,

  },
  props: {
  },
  methods:{
    /*onClickButton(value) {
       this.$emit('clicked', value)
    }*/
  },
  data() {
  },

}


</script>


<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/*
body { 
  min-width: 100%
}
*/
.columns{
  display: flex;
  flex-direction: row;
  /*align-content: center;*/
  max-width: 100%
}

#pixelLeft, #pixelRight{
  display: flex; 
  flex:1;                      /* 3 */
}
#bannerCenter{
    display: flex;
    flex-direction: column;
    background:rgb(255, 255, 255);
    min-width: 500px;
    display: flex;
    flex: 2;                       /* 3 */   
}
#pixelLeft{
    background:rgb(255, 255, 255);
}
#pixelRight{
    background:rgb(255, 255, 255);
}
#bannerCenter,#pixelLeft,#pixelRight{
   
}

@media only screen and (max-width: 1000px) {
  .side{
    display: none;
    min-width: 400px;
  }
  

}

@media only screen and (max-width: 550px) {
  .side{
    display: none;
  }

  #pixelLeft, #pixelRight{
    display: none;
  }

  #bannerCenter{
    margin-left: 20px; 
    margin-right: 20px;
    min-width: 20px;
  }

}

    h1 {
        font-size: 2.5rem;
        line-height: 3.25rem;
        margin-bottom: 1.625rem;
        font-family: "Latin Modern";
        box-sizing: border-box
    }

    .content{
       min-height: calc(100vh - 270px);
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
    }

    a {
        color: #3c8cbb;

    }

    p {
        display: block;
        text-align: justify;
        hyphens: auto;
        margin-top: 1rem;
        text-rendering: optimizelegibility;
    }


</style>




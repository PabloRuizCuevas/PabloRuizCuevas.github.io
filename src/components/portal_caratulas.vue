<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">-->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->


    <div class="columns">
        <div id="pixelLeft"><Side class="side "/></div>
        <div id="bannerCenter">
            <Caratula/>
            <Caratula2/>
            <Caratula3/>
        </div>
        <div id="pixelRight">&nbsp;</div>
    </div>
 
</template>


<script>

//import PageContainer from './components/PageContainer.vue'
import Side from '../components/Side.vue'
import Caratula from '../components/Caratulas/Caratula1.vue'
import Caratula2 from '../components/Caratulas/Caratula2.vue'
import Caratula3 from '../components/Caratulas/Caratula3.vue'

//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
   // PageContainer,
    Side,
    Caratula,
    Caratula2,
    Caratula3,
  },
  props: {
      msg: String
  },
}


</script>


<style soped>
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

</style>

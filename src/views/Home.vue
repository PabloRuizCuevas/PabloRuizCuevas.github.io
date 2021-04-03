<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">-->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div class="columns">
        
        <!--
        <svg class="particles" viewBox="0 0 340 333">

            <line class="path" x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(220,220,220);stroke-width:2" />
            <line class="path" x1="0" y1="0" x2="200" y2="200" style="stroke:rgb(220,220,220);stroke-width:2" />
        </svg>
        -->

        <div id="pixelLeft"><Side class="side "/></div>
        <div id="bannerCenter" >
          <div v-for="n in publications" :key="n">
            <Caratulall  v-bind:dict="dict[n]" />  <!-- v-on:click="onClickButton(1)"  dict[n]-->
          </div>
        </div>

        <div id="pixelRight">&nbsp;</div>
    </div>

</template>


<script>

//import PageContainer from './components/PageContainer.vue'
import Side from '../components/Side.vue'

import Caratulall from  '../components/Caratula_all.vue'
const { dict,publications } = require('../pages.js')

//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
   // PageContainer,
    Side,
    Caratulall,
  },
  props: {
  },
  methods:{
    /*onClickButton(value) {
       this.$emit('clicked', value)
    }*/
  },
  data() {
    return {
        publications,
        dict
    }
  },
}


</script>


<style>

@import "../style/latex.css";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.columns{
  display: flex;
  flex-direction: row;
  max-width: 100%;
}

#bannerCenter{
    display: flex;
    flex-direction: column;
    background:rgb(255, 255, 255);
    min-width: 500px;
    display: flex;
    flex: 2;                       /* 3 */  
    z-index: 2;
}

#pixelRight,#pixelLeft{
    display: flex; 
    flex:1;                      /* 3 */
    background:rgb(255, 255, 255);
    z-index: 1;
    justify-content: center;
}

.side{
  width: 9.5vw;  
}


@media only screen and (min-width: 1800px) {
  h1 {
      font-size: 3rem;
  }
  p {
      font-size: 1.2rem;
  }
}

@media only screen and (min-width: 1500px) {
  #pixelRight,#pixelLeft{
      background:rgb(255, 255, 255);
      flex: 1.5;
  }
  .side{
    width: 7.5vw;  
  }
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

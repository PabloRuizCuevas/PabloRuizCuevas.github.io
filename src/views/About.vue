
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">-->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <div class="columns">
        <div id="pixelLeft"><Side class="side "/></div>
        <div id="bannerCenter" >
          <div class="content" style="margin-top:40px">
            <p> This webpage is intended to summarize my work at FRMII, during the year I have worked at this great institution I have developed many useful python codes that deserve a proper documentation and explanation.
            Moreover the complexity and interest of the research combined with the lack of information on regular sources of information ispired me to create a web to post all the content and its development.
            </p>

            <img src="../images/reactor.jpg">

            <p> Moreover the complexity and interest of the research combined with the lack of information on regular sources of information ispired me to create a web to post all the content and its development. :)
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




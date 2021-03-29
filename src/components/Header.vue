<template>

  <header>
    <div class="header">

      <router-link to="/" id="nombre"> Pablo Ruiz  <i style="color: #A28BE7;margin-left: 15px">  at FRMII </i>  </router-link> 

      <div class="header-right">
        <!--<a v-on:click="choose_page(), home=true" id="inactive">  </a>-->
        <router-link id="inactive" class="header_letters" to="/">Home</router-link> 
        <router-link id="inactive" class="header_letters" to="/about">About</router-link>
        <router-link id="inactive" class="header_letters" to="/contact">Contact</router-link>

        <router-link class="logo"  to="/"> <img  class="logo" alt="logo" src="../images/logo2.png">  </router-link> 
   
      </div>
     
    </div>
   
  </header>

  <hr class="line" />

  <router-view/>

  <!--
    <div v-if="page1==1" class="content" > 
      <PageContainer/>
    </div>
  -->

</template>

<script>

//import PageContainer from "../components/PageContainer.vue"

  export default {
    name: 'headervue',
    components: {
      //PageContainer,
    },
    props: {
      msg: String
    },
    data() {
      return {
      }
    },
    mounted() {
    },
    methods: {
      choose_page: function () {
      },
      onClickChild (value) {
        console.log(value) // someValue
      }
  }
  }

</script>


<style scope>
  * {box-sizing: border-box;}

  header {
    background-color: white; 
    display: flex;
    border-bottom: solid rgb(218, 216, 216) ;
    border-width: thin;
    min-height: 100px;
    align-items: center;
    padding-left: 80px;
    padding-right: 80px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
    text-align: center;
    
    height: 110px;
    min-width: 100%;
  }

  #nombre {
    display: flex;
    align-items: center;
    height: 50px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 27px;
    font-weight: bold;
    color: rgb(10, 102, 172);
    margin-left: 0px;
  }

  .logo {
    
    display: flex;
    align-items: center;
    height: 50px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .header a {

    text-align:center;
    text-decoration: none;

    line-height: 25px;
    border-radius: 8px;
   
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    margin-left: 15px;
    margin-right: 15px;

  }

  #inactive{
    color: rgb(10, 102, 172);

  }

  .header a:hover {
   /* background-color: #ddd;
    color: black; */
  }

  .header a.active {

   /* background-color: rgb(174, 174, 174);*/
    color: white;

  }

  .header-right {
    display: flex;
    align-items: center;
    float: right;

  }

  .lateral_padding {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
  }


  @media screen and (max-width: 800px) {
    .logo {
     display: none !important;
    }
  }


  @media screen and (max-width: 700px) {
    .header {
      display: flex;
      justify-content: center;
      padding-left: 20px;
      padding-right: 20px;
    }
  
  header {
      display: flex;
      justify-content: center;
      padding-left: 20px;
      padding-right: 20px;
    }

  }

  @keyframes line_animation {
    from {
        width: 0%;
    }
    to {
        width:100%;
    }
    }
    .line {
    margin-top: 0%;
    border-bottom: solid 3px #019fb6;
    border-top-width: 0px;
    animation-name: line_animation;
    animation-duration: 1s;
    animation-timing-function: linear; 
    }
    

</style>
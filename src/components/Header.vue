<template>

  <header>
    <div class="header">

      <a v-on:click="choose_page(), home=true" id="nombre"> Pablo Ruiz  <i style="color: #A28BE7;margin-left: 15px">  at FRMII </i>   </a>
      
      <div class="header-right">
        <!--<a v-on:click="choose_page(), home=true" id="inactive">  </a>-->
        <router-link to="/">Home</router-link> 
        <router-link to="/about">Contact</router-link>
        <a v-on:click="choose_page(), contact=true" id="inactive" href="#about">About</a>
        <img v-on:click="choose_page(), home=true" class="logo" alt="logo" src="../images/logo2.png">
   
        
      </div>

    </div>
  </header>


  <router-view/>

   <!--
  <div v-if="home==1" class="content">
    <Portal  @clicked="onClickChild" />
  </div>

  <div v-if="contact==1" class="content">
    <Contact/>
  </div>
  -->

  <div v-if="page1==1" class="content" > 
    <PageContainer/>
  </div>


</template>

<script>

import PageContainer from "../components/PageContainer.vue"

  export default {
    name: 'header',
    components: {
      PageContainer,
    },
    props: {
      msg: String
    },
    data() {
      return {
        home: false,
        page: false,
        contact: false,
        page1:false,
      }
    },
    mounted() {

    },
    methods: {
      choose_page: function () {
        this.home= false,
        this.page=false,
        this.contact= false,
        this.page1 = false;
      },
      onClickChild (value) {
        this.choose_page();
        this.page1 = true;
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
     display: none;
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


</style>
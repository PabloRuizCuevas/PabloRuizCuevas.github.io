<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">-->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->

  <Headervue/>

  <Footer/>

</template>

<script>

import Headervue from './components/Header.vue'
import Footer from "./components/Footer.vue"

//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Headervue,
    Footer,
  },
  data() {
    return {
        Portal: true,
        PageContained: false,
        About: false,
    }
  },
  props: {
      msg: String
  },

}

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body { 
  min-width: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
}

</style>

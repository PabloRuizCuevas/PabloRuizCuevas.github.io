
<template>

    <div class="columns">
        <div id="pixelLeft"><Side2 class="side" :code= code /></div>
        <div id="bannerCenter">

            <!--<UP @click="scrollToTop" />-->
        
            <component :is="comp"> </component>
     
            <div class="buttons">
                
                <router-link :to="{ name: 'PageContainer', params: {datakey: Math.max(1, parseInt(datakey)-1) } }" >  
                <button class="button1" @click="minusone"> <b> &lt;  </b>  </button></router-link>
               
                <i >Page {{ pagenum }}</i>
                <!--<input v-on:keyup.enter="addone">-->
                <router-link :to="{ name: 'PageContainer', params: {datakey: Math.min( maxpub, parseInt(datakey)+1 )  } }" > 
                <button class="button1" @click="addone">  <b>  >   </b> </button></router-link>
            </div>

        </div>
        <div id="pixelRight" ></div>
    </div>

</template>

<script>

    import Side2 from  '../components/Side_summary.vue'
    import UP from  '../components/Go_up_button.vue'
    import { defineAsyncComponent } from 'vue'
    const { publications ,dict } = require('../pages.js')

    export default {
        name: 'PageContainer',
        components: {
            Side2,
            UP,
        },
        props: {
            datakey: String,
            //code: String,
        },
        data() {
            return{
                pagenum: this.datakey,  // this.path.match(/\d+/g).map(Number)[0],
                maxpub: Math.max.apply(Math, publications),
                code: dict[this.datakey].code
            }
        },
        methods:{
            addone(){
                this.pagenum =  Math.min( Math.max.apply(Math, publications),  parseInt(this.pagenum)+1);
                this.scrollToTop();
             
            },
            minusone(){
                this.pagenum =  Math.max(1,  parseInt(this.pagenum)-1);
                this.scrollToTop();
                
            },
            scrollToTop(){
                console.log("scroll to top")
                setTimeout(() =>  window.scrollTo(0,0), 100); //delay till component load
            },      
        }
        ,
        computed: {
            comp() {
               //console.log("datakey y maxpub");
               //console.log(this.path);
               //console.log(this.datakey);
               //console.log(this.maxpub);

               //var pagenum = this.path.match(/\d+/g).map(Number)[0]
               var pahtpage = 'Latexpage' + this.pagenum +'.vue';
               const Latexpage = defineAsyncComponent(() => import(`@/components/pages/${pahtpage}`));        
               return Latexpage
            }
            
        },
     //   watch: {code
      //      comments(value) {
       //         this.allComments = value;
       // }
        //}
        
        
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>

@media screen and (max-width: 1100px) {

   #bannerCenter{
        flex: 2.5;
    }

  #pixelRight,#pixelLeft{  
        flex: 1;
    }

}

@media screen and (max-width: 1000px) {

    #bannerCenter{
        margin-right: 20px
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

.buttons{
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.button1 {
    width: 80px;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: #557aac;
    border: 2px solid #557aac; 
    border-radius: 4px;
}

.button1:hover {
    background-color: #0b4188;
    border: 2px solid #0b4188; 
} 


</style>

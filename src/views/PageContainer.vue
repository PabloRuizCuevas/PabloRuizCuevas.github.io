
<template>

    <div class="columns">
        <div id="pixelLeft"><Side2 class="side "/></div>
        <div id="bannerCenter">
        
            <component :is="comp"> </component>
     
            <div class="buttons">
                <button class="button1" @click="minusone"> <b> &lt;  </b>  </button> 
                <i >Page {{ pagenum }}</i>
                <button class="button1" @click="addone">  <b>  >   </b> </button>
            </div>

        </div>
        <div id="pixelRight" ></div>
    </div>

</template>

<script>

    import Side2 from  '../components/Side_summary.vue'
    import { defineAsyncComponent } from 'vue'
    const { publications } = require('../pages.js')

    export default {
        name: 'PageContainer',
        components: {
            Side2,
        },
        props: {
            path: String,
            datakey: String,
        },
        data() {
            return{
                pagenum: this.path.match(/\d+/g).map(Number)[0],
            }
        },
        methods:{
            addone(){
                this.pagenum =  Math.min( Math.max.apply(Math, publications), this.pagenum+1);
                this.scrollToTop();
            },
            minusone(){
                this.pagenum =  Math.max(1, this.pagenum-1);
                this.scrollToTop();
            },
            scrollToTop(){
                console.log("scroll to top")
                window.scrollTo(0,0);
            },      
        }
        ,
        computed: {
            comp() {
               //var pagenum = this.path.match(/\d+/g).map(Number)[0]
               var pahtpage = 'Latexpage' + this.pagenum +'.vue';
               const Latexpage = defineAsyncComponent(() => import(`@/components/pages/${pahtpage}`));           
               return Latexpage
            }
            
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
        flex: 0.1;
        z-index: -1;
    }
    
@media screen and (max-width: 1200px) {

    #bannerCenter{
        margin-right: 20px
    }

    #pixelRight, #pixelLeft{  
        flex: 0.1
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

@media screen and (max-width: 500px) {

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

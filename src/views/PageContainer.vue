
<template>

    <div class="columns">
<<<<<<< HEAD
        <div id="pixelLeft"><Side class="side "/></div>
=======
        <div id="pixelLeft"><Side2 class="side" :code= code /></div>
>>>>>>> main
        <div id="bannerCenter">
        
            <component :is="comp"> </component>
     
            <div class="buttons">
<<<<<<< HEAD
                <button class="button1" @click="page += -1"> <b> &lt;  </b>  </button> 
                <i >Page {{ datakey }}</i>
                <button class="button1" @click="page += 1">  <b>  >   </b> </button>
            </div>


=======
                
                <router-link :to="{ name: 'PageContainer', params: {datakey: Math.max(1,datakey-1) } }" >  
                <button class="button1" @click="minusone"> <b> &lt;  </b>  </button></router-link>
               
                <i >Page {{ pagenum }}</i>
                <router-link :to="{ name: 'PageContainer', params: {datakey: Math.min( maxpub, parseInt(datakey)+1 )  } }" > 
                <button class="button1" @click="addone">  <b>  >   </b> </button></router-link>
            </div>

>>>>>>> main
        </div>
        <div id="pixelRight" ></div>
    </div>

</template>

<script>

<<<<<<< HEAD
    import Side from  '../components/Side.vue'
    import { defineAsyncComponent } from 'vue'
    //const { dict } = require('../pages.js')

=======
    import Side2 from  '../components/Side_summary.vue'
    import { defineAsyncComponent } from 'vue'
    const { publications ,dict } = require('../pages.js')
>>>>>>> main

    export default {
        name: 'PageContainer',
        components: {
<<<<<<< HEAD
            Side,
        },
        props: {
            path: String,
            datakey: String,
        },
        data() {
            return{
                page: this.datakey,
            }
        },
        mounted(){
            //let mathscript = document.createElement('script')
            //mathscript.setAttribute('src',"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")
            //document.head.appendChild(mathscript)
        },
        computed: {
            comp() {
                console.log("hola")
                console.log(this.path)
               console.log(this.datakey)
               const Latexpage = defineAsyncComponent(() => import(`@/components/pages/${this.path}`));
               return Latexpage
            }
            
        }
=======
            Side2,
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
                this.pagenum =  Math.min( Math.max.apply(Math, publications), this.pagenum+1);
                this.scrollToTop();
            },
            minusone(){
                this.pagenum =  Math.max(1, this.pagenum-1);
                this.scrollToTop();
            },
            scrollToTop(){
                //console.log("scroll to top")
                window.scrollTo(0,0);
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
        
>>>>>>> main
        
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

<<<<<<< HEAD

=======
>>>>>>> main
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
<<<<<<< HEAD
    background-color: #557aac; /* Green */
    border: 2px solid #557aac; /* Green */
    border-radius: 4px;
}

=======
    background-color: #557aac;
    border: 2px solid #557aac; 
    border-radius: 4px;
}

.button1:hover {
    background-color: #0b4188;
    border: 2px solid #0b4188; 
} 


>>>>>>> main
</style>

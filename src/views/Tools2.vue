
<template>

    <div class="columns">
     
        <div id="pixelLef">
            
            <div style="margin-bottom:200px" class="Select">

                <div>
                    <p>nrays</p>
                    <div  class="number_container">
                        <input v-model.number="nrays" placeholder="edit me" />
                    </div>
                    <p>λ [nm]</p>
                    <div  class="number_container">
                        <input v-model.number="nlambda" placeholder="edit me" />
                    </div>
                    <p>Crystal d [nm] </p>
                    <div  class="number_container">
                        <input v-model.number="dcrystal" placeholder="edit me" />
                    </div>
                </div>
            
                <div>
                    <div>
                        <p>Width, height [mm]</p>
                        <div  class="number_container">
                            <input v-model.number="sample_width" placeholder="edit me" />
                            <input v-model.number="sample_height" placeholder="edit me" />
                        </div>
                    </div>
                </div>

                <div id="pixelRigh">  <!-- &nbsp; --> 
                hst
                </div>
                
            </div>

        </div>

        <div id="bannerCente" >

            <div class="slidercontainer">
                <div  class="Slider" >
                    <Slider  v-model="thetaS" :min="0" :max="90"/>
                    <div style="text-align: center;"> <b><i>θ<sub>S</sub></i></b></div>
                </div>
                    <div  class="Slider" >
                    <Slider  v-model="thetaC" :min="0" :max="90"/>
                    <div style="text-align: center;"> <b><i>θ<sub>C</sub></i></b></div>
                </div>

            </div>

            <Bragg :thetaS="thetaS" :thetaC="thetaC" :dcrystal="dcrystal" :sample_width="sample_width"
             :sample_height="sample_height" :nlambda="nlambda" :nrays="nrays"/> 

        </div>


    </div>

</template>

<script>

    import Bragg from "../components/figures/Bragg.vue"
    //import Multiselect from '@vueform/multiselect'
    import Slider from '@vueform/slider'
    //import Chart from "../components/figures/chart.vue"
    //const { pow,add,filter } = require('mathjs')


    export default {
        name: "Tools",
        data() {
            return {
                sample_width: 30,
                sample_height: 60,
                thetaS:5,
                nrays:20,  
                nlambda:0.4,
                thetaC:5,
                dcrystal:2
            }
        },
        components: {
            Bragg,
            //Multiselect,
            Slider,
           // Chart,
        },
        methods: {
            reRender() {
                if(window.MathJax) {
                    console.log('rendering mathjax');
                    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub], () => console.log('done'));
                }
            },
        },
        mounted() {
            this.reRender();
        },

    };


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style src="../components/figures/slider.css"></style>
<style src="../components/figures/select.css"></style>
<!--<style src="@vueform/multiselect/themes/default.css"></style>-->

<style scoped>


.columns{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap:wrap-reverse;
}

#bannerCente{
    flex: 1;
    min-width: 300px;
    max-width: 40%;
    min-height: 0;
}

#pixelLef{  
    display: inline-flex;; 
    flex: 0.5;   
    flex-direction: row;
    justify-content: center;
    min-width: 300px;
    min-height: 0;
}

#pixelRigh{  
    display: inline-flex;; 
    flex: 1;   
    flex-direction: row;
    justify-content: center;
    min-height: 0;
    /*min-width: 300px;*/
}


.Select{
    display: block;
    margin: 10px;
    width: 50%;
}

.number_container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
}

.number_container2{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    
}

input{
    display: block;
    width: 50%;
}


.slidercontainer{
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.Slider{
    margin: 10px;
    display: block;
    width: 50%;
}


.shadow{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


@media only screen and (max-width: 900px) {
  .bannerCente{
    width: 80%;
  }
}

.columns{
min-height: calc(100vh - 264px);
margin-top: 10px;
}


</style>

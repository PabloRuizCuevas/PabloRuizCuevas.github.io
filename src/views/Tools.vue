
<template>

    <div class="columns">
        
        <div id="pixelLeft">
            
            <div style="margin-bottom:200px" class="Select">

                <div>
                    <p>Shape:</p>
                    <Multiselect v-model="shape"  :options="options"/>
                </div>

                <div>
                    <p>Method:</p>
                    <Multiselect v-model="value2"  :options="options2"/>
                </div>
            
                <div>
                    <div  v-if="shape=='Cuboid'">
                        <p>Width, height [mm]</p>
                        <div  class="number_container">
                            <input v-model="sample_width" placeholder="edit me" />
                            <input v-model="sample_height" placeholder="edit me" />
                        </div>
                    </div>
                    <div  v-if="shape!='Cuboid'">
                        <p>Radius [mm]</p>
                        <div  class="number_container">
                            <input v-model="sample_radius" placeholder="edit me" />
                        </div>
                    </div>
                    <p>Lamda [Å], Lsd [m]</p>
                    <div  class="number_container">
                        <input v-model="message" placeholder="edit me" />
                        <input v-model="message" placeholder="edit me" />
                    </div>
                </div>

                <div  v-if="shape=='Cuboid'">
                    <div style="display: flex;  flex-direction: column; align-items: center; justify-content: center; " > 
                        <p>Reduction factor:</p>
                        <div class="shadow" style="font-size: 1.1rem;  text-align: center; padding:2px 20px 2px 20px">R: {{Reduction()}}</div>
                    </div>
                </div>

                <div  v-if="shape!='Cuboid'">
                    <div style="display: flex;  flex-direction: column; align-items: center; justify-content: center; " > 
                        <p>Reduction factor:</p>
                        <div class="shadow" style="font-size: 1.1rem;  text-align: center; padding:2px 20px 2px 20px">R: {{Reduction()}}</div>
                    </div>
                </div>
                
            </div>

        </div>


        <div id="bannerCenter" >

            <div class="slidercontainer">
                <div  v-if="shape=='Cuboid'" class="Slider" >
                    <Slider  v-model="thetaS" :min="0" :max="90"/>
                    <div style="text-align: center;" :class="Render" > <b><i>θ<sub>S</sub></i></b></div>
                </div>
                <div  class="Slider" >
                    <Slider v-model="theta2" :min="0" :max="90"/>
                    <div style="text-align: center;"><b>2<i>θ</i></b></div>
                </div>
            </div>

            <D3component :theta_sa="theta_sa" :theta2s="theta2s" :gammas="gammas" 
            :theta_Ds="theta_Ds" :shape="shape"
            :gamma="gamma" :theta2="theta2" :thetaD="thetaD" :thetaS="thetaS"
            :sample_width="sample_width" 
            :sample_height="sample_height"
            :sample_radius="sample_radius" />

            <div class="slidercontainer">
                <div class="Slider">
                    <Slider v-model="gamma" :min="18" :max="70" />
                    <div style="text-align: center;"><b><i>γ</i></b></div>
                </div>
                <div class="Slider">
                    <Slider v-model="thetaD" :min="-70" :max="70" />
                    <div style="text-align: center;"><b><i>θ<sub>D</sub></i></b> - <b>2<i>θ</i></b> </div>
                </div>
          </div>


        </div>

        <div id="pixelRight">&nbsp;</div>
    </div>


</template>

<script>

    import D3component from "../components/figures/d3_figure_tools.vue"
    import Multiselect from '@vueform/multiselect'
    import Slider from '@vueform/slider'

    export default {
        name: "Tools",
        data() {
            return {
                sample_width: 30,
                sample_height: 60,
                sample_radius:20,
                message: '10',
                shape: 'Cuboid',
                options: ['Cuboid', 'Cilinder','Sphere'],
                value2: 'Analytical',
                options2: ['Analytical', 'Monte Carlo'],
                theta2s: '$2\\theta$',
                gammas: '$\\gamma$',
                theta_Ds: '$\\theta_D - 2\\theta$',
                theta_sa: '$\\theta_S$',
                equation1:'$R= sinc \\left (\\frac{\\pi\\omega}{\\Lambda} \\cdot \\frac{\\sin{\\theta_D}}{\\cos(2 \\theta - \\theta_D)}\\right )  sinc \\left (\\frac{\\pi t}{\\Lambda} \\cdot \\left [ \\frac{\\sin{\\theta_D}}{\\cos(2 \\theta - \\theta_D)} -1 \\right ] \\right ) $',
                equation2:'$ R=sinc \\left (\\frac{\\pi t}{\\Lambda} \\cdot \\left [ \\cos \\theta_S-\\frac{\\cos{(\\theta_D-\\theta_S)}}{\\cos(2 \\theta - \\theta_D)} \\right ] \\right ) sinc \\left (\\frac{\\pi \\omega}{\\Lambda} \\cdot \\left [\\sin \\theta_S +  \\frac{\\sin{(\\theta_D-\\theta_S)}}{\\cos(2 \\theta - \\theta_D)}  \\right ] \\right ) $',
                theta2:30,
                gamma: 50,
                thetaD:20,
                thetaS:5,      
            }
        },
        components: {
            D3component,
            Multiselect,
            Slider,
        },
        methods: {

            Reduction(){
                var lambda =40*1.28
                var eps= 0.0000001
                var a = Math.PI*this.sample_width/lambda* (Math.cos( this.thetaS*Math.PI/180)- Math.cos((this.thetaD-this.thetaS)*Math.PI/180)/Math.cos((this.theta2-this.thetaD)*Math.PI/180)   )
                var b = Math.PI*this.sample_height/lambda* (Math.sin( this.thetaS*Math.PI/180)+ Math.sin((this.thetaD-this.thetaS)*Math.PI/180)/Math.cos((this.theta2-this.thetaD)*Math.PI/180)   )
                return Math.round( Math.sin(a+eps)/(a+eps)*Math.sin(b+eps)/(b+eps)  * 1000) / 1000
            },
            Reduction_cilinder(){
                var BESSEL = require('bessel')
                console.log(BESSEL.besselj(1,1))
                var lambda =40*1.28
                var eps= 0.0000001
                var a = Math.PI*this.sample_width/lambda* (Math.cos( this.thetaS*Math.PI/180)- Math.cos((this.thetaD-this.thetaS)*Math.PI/180)/Math.cos((this.theta2-this.thetaD)*Math.PI/180)   )
                var b = Math.PI*this.sample_height/lambda* (Math.sin( this.thetaS*Math.PI/180)+ Math.sin((this.thetaD-this.thetaS)*Math.PI/180)/Math.cos((this.theta2-this.thetaD)*Math.PI/180)   )
                return Math.round( Math.sin(a+eps)/(a+eps)*Math.sin(b+eps)/(b+eps)  * 1000) / 1000
            },
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
        computed:{
            Render(){ console.log("hola"); this.reRender(); return 1}
            
        }

        

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
    /*align-items: flex-start;*/
    justify-content: center;
    flex-wrap:wrap-reverse;
}

#bannerCenter{
    flex: 2.5;
    min-width: 300px;
}

#pixelRight,#pixelLeft{  
    flex: 1;
    min-width: 300px;
}

#pixelLeft{ 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.Select{
    margin: 10px;
    display: block;
    width: 50%;
}

.number_container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
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

</style>

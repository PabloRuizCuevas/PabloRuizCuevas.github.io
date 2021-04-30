
<template>



    <div class="columns">
     

        <div id="pixelLef">
            

            <div style="margin-bottom:200px" class="Select">

                <div>
                    <p>Shape:</p>
                    <Multiselect v-model="shape"  :options="options"/>
                </div>

                <div>
                    <p>Method:</p>
                    <Multiselect v-model="method"  :options="methods"/>
                </div>

                <div  v-if="method=='Monte Carlo'">
                    <p>Simulations</p>
                    <div  class="number_container">
                        <input v-model.number="nsimulations" placeholder="edit me" />
                    </div>
                </div>
            
                <div>
                    <div  v-if="shape=='Cuboid'">
                        <p>Width, height [mm]</p>
                        <div  class="number_container">
                            <input v-model.number="sample_width" placeholder="edit me" />
                            <input v-model.number="sample_height" placeholder="edit me" />
                        </div>
                    </div>
                    <div  v-if="shape!='Cuboid'">
                        <p>Radius [mm]</p>
                        <div  class="number_container">
                            <input v-model.number="sample_radius" placeholder="edit me" />
                        </div>
                    </div>
                    <p>λ [mm], τ [ns]</p>
                    <div  class="number_container">
                        <input v-model.number="Small_lambda" placeholder="edit me" />
                        <input v-model.number="tau" placeholder="edit me" />
                    </div>
                    <p>Lenght [m]</p>
                    <div  class="number_container">
                        <input v-model.number="Lsd" placeholder="edit me" />
                    </div>
                    

                </div>


                <div  v-if="shape=='Cuboid'">
                    <div style="display: flex;  flex-direction: column; align-items: center; justify-content: center; " > 
                        <p>Reduction factor:</p>
                        <div class="shadow" style="font-size: 1.1rem;  text-align: center; padding:2px 20px 2px 20px">R: {{Reduction()}}</div>
                    </div>
                </div>

                <div  v-if=" (shape != 'Cuboid') && (method != 'Monte Carlo') ">
                    <div style="display: flex;  flex-direction: column; align-items: center; justify-content: center; " > 
                        <p>Reduction factor:</p>
                        <div class="shadow" style="font-size: 1.1rem;  text-align: center; padding:2px 20px 2px 20px">R: {{Reduction_cylinder()}}</div>
                    </div>
                </div>

                <div  v-if=" (shape != 'Cuboid') && (method == 'Monte Carlo') ">
                    <div style="display: flex;  flex-direction: column; align-items: center; justify-content: center; " > 
                        <p>Reduction factor:</p>
                        <div class="shadow" style="font-size: 1.1rem;  text-align: center; padding:2px 20px 2px 20px">R: {{Reduction_cylinder_MC()}}</div>
                    </div>
                </div>
                

            </div>

        </div>

        <div id="bannerCente" >

            <div v-if="shape=='Cuboid'"  >

                <div class="slidercontainer">
                    <div  class="Slider" >
                        <Slider  v-model="thetaS" :min="0" :max="90"/>
                        <div style="text-align: center;"> <b><i>θ<sub>S</sub></i></b></div>
                    </div>
                    <div  class="Slider" >
                        <Slider v-model="theta2" :min="-90" :max="90"/>
                        <div style="text-align: center;"><b>2<i>θ</i>  </b></div>   <!-- + <i>θ<sub>S</sub></i>   -->
                    </div>
                </div>

                <D3component :theta_sa="theta_sa" :theta2s="theta2s" :gammas="gammas" 
                :theta_Ds="theta_Ds" :shape="shape"
                :gamma="gamma" :theta2="theta2" :thetaD="thetaD" :thetaS="thetaS" 
                :sample_width="sample_width" 
                :sample_height="sample_height"
                :sample_radius="sample_radius" /> <!-- Theta2_minus_s()   -->

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
                <div v-if="method=='Monte Carlo'" >
                    <h2>Monte Carlo => Analytical</h2>
                </div>
            </div>


            <div v-if=" (shape != 'Cuboid') && (method != 'Monte Carlo')" >

                <div class="slidercontainer">
        
                    <div  class="Slider" >
                        <Slider v-model="theta2" :min="0" :max="90"/>
                        <div style="text-align: center;"><b>2<i>θ</i></b></div>
                    </div>

                    <div class="Slider">
                        <Slider v-model="gamma" :min="18" :max="70" />
                        <div style="text-align: center;"><b><i>γ</i></b></div>
                    </div>

                </div>

                <D3component :theta_sa="theta_sa" :theta2s="theta2s" :gammas="gammas" 
                :theta_Ds="theta_Ds" :shape="shape"
                :gamma="gamma" :theta2="theta2" :thetaD="0" :thetaS="thetaS"
                :sample_width="sample_width" 
                :sample_height="sample_height"
                :sample_radius="sample_radius" />

                <p> The analytical case is only calculated for the case <i>θ<sub>D</sub></i> = 2<i>θ</i> </p>

            </div>

            <div v-if=" (shape != 'Cuboid') && (method == 'Monte Carlo')">

                <div class="slidercontainer">
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

                <div style="margin-top: -40px" v-if="method=='Monte Carlo'" >
                    <h3>Monte Carlo method</h3>
                    <p> With Monte Carlo simulations we can stimate the reduction factor in the general case. A big number of simulations will offer better results, but can slow down the webpage performance</p>
                </div>


            </div>

        </div>

        <div id="pixelRigh">  <!-- &nbsp; -->
            <div v-if="(shape == 'Cuboid')&& (method != 'Monte Carlo')" > 
                <Chart :datay="Reduction_array()[0]" :datax="Reduction_array()[1]" :theta2="theta2"/>  <!--Theta2_minus_s()-->
                
                <!--<div class="number_text" style="padding-left:10px; padding-right:10px"> min x, max x, min y, max y.</div>
                <div  class="number_container2">
                    <input v-model="minx" placeholder="edit me" />
                    <input v-model="maxx" placeholder="edit me" />
                    <input v-model="miny" placeholder="edit me" />
                    <input v-model="maxy" placeholder="edit me" />
                </div>
                -->
            </div>
            <div v-if="(shape == 'Cuboid')&& (method == 'Monte Carlo')" >  
                <Chart :datay="Reduction_array_cuboid_MC()[0]" :datax="Reduction_array_cuboid_MC()[1]" :theta2="theta2"/>
                <!--<h3>In develop, only for cuboid</h3>-->
            </div>


            <div v-if="(shape == 'Cylinder')&& (method != 'Monte Carlo')" >  
                <Chart :datay="Reduction_array_cylinder()[0]" :datax="Reduction_array_cylinder()[1]" :theta2="theta2"/>
                <!--<h3>In develop, only for cuboid</h3>-->
            </div>
            <div v-if="(shape == 'Cylinder')&& (method == 'Monte Carlo')" >  
                <Chart :datay="Reduction_array_cylinder_MC()[0]" :datax="Reduction_array_cylinder_MC()[1]" :theta2="theta2"/>
                <!--<h3>In develop, only for cuboid</h3>-->
            </div>

        </div>

    </div>


</template>

<script>

    import D3component from "../components/figures/d3_figure_tools.vue"
    import Multiselect from '@vueform/multiselect'
    import Slider from '@vueform/slider'
    import Chart from "../components/figures/chart.vue"
    //const { pow,add,filter } = require('mathjs')


    export default {
        name: "Tools",
        data() {
            return {
                sample_width: 30,
                sample_height: 60,
                sample_radius:20,
                message: '10',
                shape: 'Cuboid',
                options: ['Cuboid', 'Cylinder','Sphere'],
                method: 'Analytical',
                methods: ['Analytical', 'Monte Carlo'],
                theta2s: '$2\\theta$ + \\theta_S ',  //dont need to pass it anymore
                gammas: '$\\gamma$',
                theta_Ds: '$\\theta_D - 2\\theta$',
                theta_sa: '$\\theta_S$',
                theta2:30,
                gamma: 50,
                thetaD:10,
                thetaS:5,
                nsimulations:200,  
                //Biglambda:, 
                planck:6.62607015e-34, // 6.62607015×10−34 J⋅Hz−1  // 4.135667696...×10−15 eV⋅Hz−1
                massn:1.67492749804e-27,  //kg
                Small_lambda:4.75, // 4.75 Amstrom  
                //wm:1,    
                tau: 0.1, //ns
                Lsd:2.2, //meters
            }
        },
        components: {
            D3component,
            Multiselect,
            Slider,
            Chart,
        },
        methods: {
            Biglambda(){ 
                var Small_lambda = this.Small_lambda*1e-10 //in meters
                return 2*Math.PI*this.planck/(this.massn*Small_lambda*this.Wn())  //meters
            },
            Wn(){ 
                var tau= this.tau*1e-9
                var Small_lambda = this.Small_lambda*1e-10 
                return tau/(this.Lsd*Small_lambda**3)*2*Math.PI*this.planck**2/this.massn**2
            },
            Theta2_minus_s(){
                var theta2_minus_s = this.theta2+this.thetaS
                return theta2_minus_s
            },
            Reduction(){
                var lambda = this.Biglambda() //40*1.28
                var eps= 0.0000001
                var sample_width = this.sample_width/1000
                var sample_height = this.sample_height/1000
                var a = Math.PI*sample_width/lambda* (Math.cos( this.thetaS*Math.PI/180)- Math.cos((this.thetaD-this.thetaS)*Math.PI/180)/Math.cos((this.theta2-this.thetaD)*Math.PI/180)   )
                var b = Math.PI*sample_height/lambda* (Math.sin( this.thetaS*Math.PI/180)+ Math.sin((this.thetaD-this.thetaS)*Math.PI/180)/Math.cos((this.theta2-this.thetaD)*Math.PI/180)   )
                return Math.round( Math.sin(a+eps)/(a+eps)*Math.sin(b+eps)/(b+eps)  * 1000) / 1000
            },
            Reduction_array(){  ///change this horrible way to put to make a function and pass data
                var lambda = this.Biglambda() //40*1.28
                var sample_width = this.sample_width/1000
                var sample_height = this.sample_height/1000
                var eps= 0.0000001
                var y=[]
                var x=[]
                for (var i = -90; i < 91; i += 2){  //calculate the average
                    x.push(i)
                    var a = Math.PI*sample_width/lambda* (Math.cos( this.thetaS*Math.PI/180)- Math.cos((this.thetaD-this.thetaS)*Math.PI/180)/Math.cos((i-this.thetaD)*Math.PI/180)   )
                    var b = Math.PI*sample_height/lambda* (Math.sin( this.thetaS*Math.PI/180)+ Math.sin((this.thetaD-this.thetaS)*Math.PI/180)/Math.cos((i-this.thetaD)*Math.PI/180)   )
                    y.push(Math.round( Math.sin(a+eps)/(a+eps)*Math.sin(b+eps)/(b+eps)* 10000) / 10000)
                }
                return [x,y]
            },
            Reduction_cylinder(){
                var BESSEL = require('bessel')
                var lambda = this.Biglambda() // 40*1.28 //0.0002 m en mm 0.2
                var eps= 0.0000001
                var a = lambda/(2*Math.PI*this.sample_radius)*BESSEL.besselj(4*Math.PI*this.sample_radius/lambda*Math.sin(this.theta2*Math.PI/180/2+eps),1)/Math.sin(this.theta2*Math.PI/180/2+eps)
                return Math.round( a* 1000) / 1000
            },
            path_legth_dif(x,y,Theta_two,Theta_D){
                var radTheta_D   = Theta_D*Math.PI/180
                var radTheta_two = Theta_two*Math.PI/180
                var eps= 0.00000001
                return(x-(x*Math.cos(radTheta_D+eps)+y*Math.sin(radTheta_D+eps))/Math.cos(radTheta_two-radTheta_D+eps))
            },
            Reduction_cylinder_MC(){
                var x = [];
                var y = [];
                var n = this.nsimulations
                var lambda = this.Biglambda() //40*1.28
                var sample_radius = this.sample_radius/1000
                if (sample_radius > 0){
                    while( x.length < n) {  //throw random numbers
                        var xa = Math.random(-sample_radius,sample_radius);   //radiuahs in milimetreds???? 
                        var ya = Math.random(-sample_radius,sample_radius);
                        var radi = Math.sqrt(xa**2+ya**2)  
                        if (radi < sample_radius){ //take the ones inside the circle
                            x.push(xa)
                            y.push(ya)
                        }
                    }
                    var a = 0
                    for (var i = 0; i < x.length; i++ ){  //calculate the average
                        a += Math.cos(2*Math.PI/lambda*this.path_legth_dif(x[i],y[i],this.theta2,this.thetaD));
                    }
                    a = a/x.length
                    return Math.round(a*1000)/1000
                }
                else{
                    console.log("radius must be positive")
                }
            },
            Reduction_array_cylinder(){  ///change this horrible way to put to make a function and pass data
                var BESSEL = require('bessel')
                var lambda = this.Biglambda() //40*1.28
                var sample_radius = this.sample_radius/1000
                var eps= 0.0000001
                var y=[]
                var x=[]
                if (sample_radius > 0){
                    for (var i = -90; i < 91; i += 2){  //calculate the average
                        x.push(i)
                        var a = lambda/(2*Math.PI*sample_radius)*BESSEL.besselj(4*Math.PI*sample_radius/lambda*Math.sin(i*Math.PI/180/2+eps),1)/Math.sin(i*Math.PI/180/2+eps)
                        y.push(Math.round( a* 10000)/ 10000)
                    }
                }
                return [x,y]
            },
            Reduction_array_cylinder_MC(){  ///change this horrible way to put to make a function and pass data
                
                var x = [];
                var y = [];
                var xchart = [];
                var ychart = [];
                var n = this.nsimulations
                var lambda = this.Biglambda() //40*1.28
                var sample_radius = this.sample_radius/1000
                if (sample_radius > 0){                
                    while( x.length < n) {  //throw random numbers
                        var xa = Math.random(-sample_radius,sample_radius);
                        var ya = Math.random(-sample_radius,sample_radius);
                        var radi = Math.sqrt(xa**2+ya**2)  
                        if (radi < sample_radius){ //take the ones inside the circle
                            x.push(xa)
                            y.push(ya)
                        }
                    }
                
                    for (var j = -90; j < 91; j += 5){  //calculate the average
                        xchart.push(j)
                        var a = 0
                        for (var i = 0; i < x.length; i++ ){  //calculate the average
                            a += Math.cos(2*Math.PI/lambda*this.path_legth_dif(x[i],y[i],j,this.thetaD));
                        }
                        a = a/x.length
                        ychart.push(Math.round( a* 10000)/ 10000)
                    }
                }
                else{
                    console.log("radius must be positive")
                } 
                return [xchart,ychart]
            },
            Reduction_array_cuboid_MC(){  ///change this horrible way to put to make a function and pass data
                
                var x = [];
                var y = [];
                var xchart = [];
                var ychart = [];
                var n = this.nsimulations
                var lambda = this.Biglambda() //40*1.28
                var sample_width = this.sample_width/1000
                var sample_height = this.sample_height/1000
                if (sample_width > 0){
                    while( x.length < n) {  //throw random numbers   inside a rotated 2dcuboid
                        var xa = Math.random(-sample_width/2,sample_width/2);
                        var ya = Math.random(-sample_height/2,sample_height/2);
                        xa= xa* Math.cos(this.thetaS) - ya * Math.sin(this.thetaS)
                        ya= xa* Math.sin(this.thetaS) + ya * Math.cos(this.thetaS)
                        x.push(xa)
                        y.push(ya)
                    }
                    for (var j = -90; j < 91; j += 5){  //calculate the average
                        xchart.push(j)
                        var a = 0
                        for (var i = 0; i < x.length; i++ ){  //calculate the average
                            a += Math.cos(2*Math.PI/lambda*this.path_legth_dif(x[i],y[i],j,this.thetaD));
                        }
                        a = a/x.length
                        ychart.push(Math.round( a* 1000)/ 1000)
                    }
                }
                else{
                    console.log("radius must be positive")
                } 
                return [xchart,ychart]
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

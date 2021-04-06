
<template>
    <!--
    <input v-model="theta2" placeholder="edit me">
    <input v-model="gamma" placeholder="edit me">
    <input v-model="thetaD" placeholder="edit me"> -->

    <div class="slidercontainer">
        <div  class="Slider" dir="">
            <Slider v-model="theta2" :min="0" :max="90"/>
            <div style="text-align: center;">$\theta_2$</div>
        </div>
        <div class="Slider">
            <Slider v-model="gamma" :min="12" :max="70" />
            <div style="text-align: center;">$\gamma$</div>
        </div>
        <div class="Slider">
            <Slider v-model="thetaD" :min="-70" :max="70" />
            <div style="text-align: center;">$\theta_D$</div>
        </div>
    </div>
    
    <div class="chart">
        <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">

            <rect class="monochromator" :width="analyzer_width" :height="analyzer_height" 
            fill-opacity="0.4" :x="0" :y="y1-analyzer_height/2"/>

            <circle class="sample" :cx="x2" :cy="y1" :r="radius"/>
            <rect class="sample" :width="analyzer_width" :height="analyzer_height" 
             :x="analyzerX[0]" :y="analyzerX[1]" :transform="gamma_rot"/>

            <rect class="detector" :width="detector_width" :height="detector_height" 
            :x="detectorX[0]" :y="detectorX[1]" :transform="thetaD_rot"/>

            <line class="dashline" :x1="x2" :y1="y1" :x2="width" :y2="y1"  />
            <line class="dashline" :x1="x2" :y1="y1" :x2="x2" :y2="0" />

            <text :x="x2-10" y="15" fill="black"> y </text>
            <text :x="width-10" :y="y1+10" fill="black"> x </text>

            <line class="line 1" :x1="l1X0[0]" :y1="l1X0[1]-d_2_r" :x2="l1X[0]" :y2="l1X[1]-d_2_r"/>
            <!--<line class="line 1" :x1="l1X0[0]" :y1="l1X0[1]" :x2="l1X[0]" :y2="l1X[1]"  />-->
            <line class="line 1p" :x1="x1" :y1="y1+d_2_r" :x2="x2" :y2="y1+d_2_r"  />

            <line class="line 2p" :x1="x2" :y1="y1-d_2_r" :x2="l4Xp[0]" :y2="l4Xp[1]" /> 
            <!--<line class="line 2" :x1="x2" :y1="y1" :x2="l2X[0]" :y2="l2X[1]" />-->
            <line class="line 2p" :x1="x2" :y1="y1+d_2_r" :x2="l4X[0]" :y2="l4X[1]" />

            <line class="line 2p" :x1="l4Xp[0]" :y1="l4Xp[1]" :x2="l5Xp[0]" :y2="l5Xp[1]" /> 
            <!--<line class="line 3" :x1="l2X[0]" :y1="l2X[1]" :x2="l3X[0]" :y2="l3X[1]" />-->
            <line class="line 3p" :x1="l4X[0]" :y1="l4X[1]" :x2="l5X[0]" :y2="l5X[1]" />
            
        </svg>
    </div>

</template>



<script>

    import Slider from '@vueform/slider'

    export default {
        name: "D3component",
        props:{

        },
        data() {
            return {
                x1:0,
                //r1:100,
                //l1y1:-10,
                x2: 180,
                r2:100,
                theta2:30,
                gamma: 50,
                height: 200,
                width: 400,
                radius:20,
                analyzer_height:40,
                analyzer_width:8,
                detector_height:40,
                detector_width:8,
                thetaD:20,
                value: 20,
                d_2_r:5,
            }
        },
        components: {
            Slider
        },
        methods: {

        },
        mounted() {
       
        },
        computed:{
            y1() {
                return (this.height*0.6)
            },
            l1X0() {
                return [0,this.height*0.6]
            },
            l1X() {
                return [this.x2,this.height*0.6]
            },
            l2X() {
                return [this.l1X[0] + this.r2 *Math.cos(this.theta2*Math.PI/180 ),this.l1X[1] - this.r2 *Math.sin(this.theta2*Math.PI/180 )]
            },
            analyzerX(){
                return [this.l2X[0] - this.analyzer_width/2,this.l2X[1] - this.analyzer_height/2]
            },
            gamma_rot(){
                return `rotate(${-this.gamma-this.theta2} ${this.l2X[0]} ${this.l2X[1]})`
            },
            l3X() {
                return [this.l2X[0] - this.r2 *Math.cos( (-this.theta2 -2*this.gamma)*Math.PI/180 ),this.l2X[1] - this.r2 *Math.sin( (-this.theta2 -2*this.gamma)*Math.PI/180 ) ]
            },
            detectorX(){
                return [ this.l3X[0] - this.detector_width/2 ,this.l3X[1] - this.detector_height/2 ]
            },
            thetaD_rot(){
                return `rotate(${-this.thetaD-2*this.gamma-this.theta2} ${this.l3X[0]} ${this.l3X[1]})`
            },
            ray_d_reflec(){
                return this.d_2_r *Math.cos(this.theta2*Math.PI/180) / Math.cos(this.gamma*Math.PI/180)
            },
            l4X(){
                return [(this.l2X[0] + this.ray_d_reflec * Math.cos((90-this.gamma-this.theta2)*Math.PI/180) ),(this.l2X[1] + this.ray_d_reflec * Math.sin((90-this.gamma-this.theta2)*Math.PI/180) )]
            },
            l4Xp(){
                return [(this.l2X[0] - this.ray_d_reflec * Math.cos((90-this.gamma-this.theta2)*Math.PI/180) ),(this.l2X[1] - this.ray_d_reflec * Math.sin((90-this.gamma-this.theta2)*Math.PI/180) )]
            },
            l5X(){
                var angle2 = 180-2*this.gamma-this.theta2
                var angle3 = -90+angle2-this.thetaD
                var ray_d2_reflec =this.ray_d_reflec *Math.cos((this.gamma)*Math.PI/180) / Math.cos( (this.thetaD  )*Math.PI/180)
                return  [(this.l3X[0] + ray_d2_reflec * Math.cos( angle3*Math.PI/180 )),(this.l3X[1] + ray_d2_reflec * Math.sin(angle3*Math.PI/180 ))]
            },
            l5Xp(){
                var angle2 = 180-2*this.gamma-this.theta2
                var angle3 = -90+angle2-this.thetaD
                var ray_d2_reflec =this.ray_d_reflec *Math.cos((this.gamma)*Math.PI/180) / Math.cos( (this.thetaD  )*Math.PI/180)
                return  [(this.l3X[0] - ray_d2_reflec * Math.cos( angle3*Math.PI/180 )),(this.l3X[1] - ray_d2_reflec * Math.sin(angle3*Math.PI/180 ))]
            },
            

        }
 
    };


</script>

<!--<style src="@vueform/slider/themes/default.css"></style>-->
<style src="./slider.css"></style>

<style scoped>



    .line{
        opacity: 0.6;
        stroke-width:2;
        stroke: #557aac;
        stroke-linecap:round;
    }

    .dashline{
        stroke: grey;
        stroke-dasharray:4;
    }

    .monochromator{
        fill: pink;
        opacity: 1;
        stroke: black;
        stroke-width: 0.5;
    }

    .sample{
        fill: lightgrey;
        stroke: black;
        stroke-opacity: 1;
        stroke-width: 0.5;
    }

    .detector{
        fill: lightblue;
        stroke: black;
        stroke-opacity: 1;
        stroke-width: 0.5;
    }

    .Slider{
        margin: 10px;
        display: block;
        width: 30%;
    }

    .slidercontainer{
        margin-top: 40px;
        display: flex;
        flex-direction: row;
     
    }

    svg{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   
    }

    

</style>

<template>
    <!--
    <input v-model="theta2" placeholder="edit me">
    <input v-model="gamma" placeholder="edit me">
    <input v-model="thetaD" placeholder="edit me"> -->

    <div class="slidercontainer">
        <div  class="Slider" dir="">
            
            <Slider v-model="theta2" :min="0" :max="90"/>
            <div style="text-align: center;">theta2</div>
        </div>
        <div class="Slider">
            <Slider v-model="gamma" :min="0" :max="90" />
            <div style="text-align: center;">gamma</div>
        </div>
        <div class="Slider">
            <Slider v-model="thetaD" :min="0" :max="90" />
            <div style="text-align: center;">thetaD</div>
        </div>
    </div>
    
    <div class="chart">
        <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">

            <rect class="monochromator" :width="analyzer_width" :height="analyzer_height" 
            fill-opacity="0.4" :x="0" :y="y1-analyzer_height/2"/>

            <circle class="sample" :cx="x2" :cy="y1" :r="radius"/>

            <rect class="sample" :width="analyzer_width" :height="analyzer_height" 
             :x="analyzer_x" :y="analyzer_y" :transform="gamma_rot"/>

            <rect class="detector" :width="detector_width" :height="detector_height" 
            :x="detector_x" :y="detector_y" :transform="thetaD_rot"/>

            <line class="line" :x1="x1" :y1="y1" :x2="x2" :y2="y1"  />

            <line class="dashline" :x1="x2" :y1="y1" :x2="width" :y2="y1"  />
            <line class="dashline" :x1="x2" :y1="y1" :x2="x2" :y2="0" />

            <line class="line" :x1="x2" :y1="y1" :x2="l2x2" :y2="l2y2" />

            <line class="line" :x1="l2x2" :y1="l2y2" :x2="l3x2" :y2="l3y2" />
            
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
                value: 20
            }
        },
        components: {
            Slider
        },
        methods: {
        
        },
        computed:{
            y1() {
                return (this.height*0.6)
            },
            l2x2() {
                return ( this.x2 + this.r2 *Math.cos(this.theta2*Math.PI/180 ) )
            },
            l2y2() {
                return ( this.y1 - this.r2 *Math.sin(this.theta2*Math.PI/180 ))
            },
            analyzer_x(){
                return ( this.l2x2 - this.analyzer_width/2 )
            },
            analyzer_y(){
                return ( this.l2y2 - this.analyzer_height/2 )
            },
            gamma_rot(){
                return `rotate(${-this.gamma-this.theta2} ${this.l2x2} ${this.l2y2})`
            },
            l3x2() {
                return ( this.l2x2 - this.r2 *Math.cos( (-this.theta2 -2*this.gamma)*Math.PI/180 ) )
            },
            l3y2() {
                return ( this.l2y2 - this.r2 *Math.sin( (-this.theta2 -2*this.gamma)*Math.PI/180 )) //- 1/3*Math.PI 
            },
            detector_x(){
                return ( this.l3x2 - this.detector_width/2 )
            },
            detector_y(){
                return ( this.l3y2 - this.detector_height/2 )
            },
            thetaD_rot(){
                return `rotate(${-this.thetaD-2*this.gamma-this.theta2} ${this.l3x2} ${this.l3y2})`
            },
            
        }
 
    };


</script>

<!--<style src="@vueform/slider/themes/default.css"></style>-->
<style src="./slider.css"></style>

<style scoped>



    .line{
        opacity: 0.4;
        stroke-width:3;
        stroke: red;
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

    

</style>
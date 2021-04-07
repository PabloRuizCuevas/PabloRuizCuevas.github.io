
<template>
    <!--
    <input v-model="theta2" placeholder="edit me">
    <input v-model="gamma" placeholder="edit me">
    <input v-model="thetaD" placeholder="edit me"> -->

    <div class="slidercontainer">
        <div  class="Slider" dir="">
            <Slider v-model="theta2" :min="0" :max="90"/>
            <div style="text-align: center;">{{theta2s}}</div>
        </div>
        <div class="Slider">
            <Slider v-model="gamma" :min="12" :max="70" />
            <div style="text-align: center;">{{gammas}}</div>
        </div>
        <div class="Slider">
            <Slider v-model="thetaD" :min="-70" :max="70" />
            <div style="text-align: center;">{{theta_Ds}}</div>
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

            <line class="dashline x" :x1="x2" :y1="y1" :x2="width" :y2="y1"  />
            <line class="dashline y" :x1="x2" :y1="y1" :x2="x2" :y2="0" />

            <text :x="x2-10" y="15" fill="black"> y </text>
            <text :x="width-10" :y="y1+10" fill="black"> x </text>
             <text :x="width-10" :y="y1+20" fill="black"> {{theta_Ds}} </text>

            <line class="line 1" :x1="l1X0[0]" :y1="l1X0[1]-d_2_ry" :x2="l1X[0]-d_2_rx" :y2="l1X[1]-d_2_ry"/>
            <!--<line class="line 1" :x1="l1X0[0]" :y1="l1X0[1]" :x2="l1X[0]" :y2="l1X[1]"  />-->

            <line class="line 2p" :x1="x2-d_2_rx" :y1="y1-d_2_ry" :x2="l4Xp[0]" :y2="l4Xp[1]" /> 
            <!--<line class="line 2" :x1="x2" :y1="y1" :x2="l2X[0]" :y2="l2X[1]" />-->

            <line class="line 2p" :x1="l4Xp[0]" :y1="l4Xp[1]" :x2="l5Xp[0]" :y2="l5Xp[1]" /> 
            <!--<line class="line 3" :x1="l2X[0]" :y1="l2X[1]" :x2="l3X[0]" :y2="l3X[1]" />-->

            
        </svg>
    </div>

</template>



<script>

    import Slider from '@vueform/slider'

    export default {
        name: "D3component",
        props:{
            theta2s: String,
            gammas: String,
            theta_Ds: String,

        },
        data() {
            return {
                theta2:30,
                gamma: 50,
                height: 200,
                thetaD:20,
                width: 400,
                analyzer: {x:100,y:40,width:8,height:10},
                sample: { x:100,y:40,radius:8 },
                detector: {x:100,y:40,width:8,height:10},
                line1:  {x:100,y:40,x2:8},
            }
        },
        components: {
            Slider
        },
        methods: {
            /*propagator1(len,pos){
                return [this.len,pos[1]]
            }
            //"propagator1(len,pos2)[0]*/
        },
        mounted() {
       
        },
        computed:{

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
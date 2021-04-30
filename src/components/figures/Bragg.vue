
<template>
    <!--
    <input v-model="theta2" placeholder="edit me">
    <input v-model="gamma" placeholder="edit me">
    <input v-model="thetaD" placeholder="edit me"> -->

    
    <div class="chart">
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" class="shadow">

            <rect class="monochromator" :width="monocromator.width" :height="monocromator.height" 
            fill-opacity="0.4" :x="monocromator.xc" :y="monocromator.yc"/>
            
            <rect class="sample" :width="sample.width" :height="sample.height" 
            fill-opacity="0.8" :x="sample.xc" :y="sample.yc" :transform="sample.transform"/>
            
            <polyline class="line 0" :style="opacity(1)"  :points="`${line1(n).x0},${line1(n).y0}  ${line1(n).x1},${line1(n).y1}`" fill="none"/> 
            <polyline v-for="n in nrays" :key="n" :style="opacity(n)" class="line 0" :points="`${line1(n).x1},${line1(n).y1}  ${line1(n).x2},${line1(n).y2}`" fill="none"/> 

            <defs>
                <!--<linearGradient id="Gradient1"> <stop offset="0%" stop-color="white"/>
                <stop offset="100%" stop-color="blue"/></linearGradient>  url(#Gradient1)" -->
                <pattern id="Pattern" x="0" y="0" width=".2" height=".2">
                    <circle :cx="`${sample.width/10}`" :cy="`${sample.height/10}`" r="2.5" fill="blue" fill-opacity="0.8"/>
                </pattern>

            </defs>

            <!--this extrange part is to clip/mask atoms inside the cube-->
            <defs>
                <rect id="rect" :width="sample.width" :height="sample.height" :x="sample.xc" :y="sample.yc" fill="none" :transform="sample.transform" />
                <clipPath id="clip">
                    <use xlink:href="#rect"/>
                </clipPath>
            </defs>
            <use xlink:href="#rect"/>

            <g clip-path="url(#clip)">
                <rect fill="url(#Pattern)" :width="2*sample.width" :height="sample.height" :x="sample.xc-12" :y="sample.yc" :transform="Crystalrot()"/> 
            </g>

    
        </svg>
    </div>

  
</template>

<script>

    export default {
        name: "D3component",
        props:{
            thetaS:Number,
            thetaC:Number,
            sample_width:Number,
            sample_height:Number,
            nlambda:Number,
            nrays:Number,
            dcrystal:Number,
        },
        data() {
            return {   
                monocromator: {height:60,width:6, x:0,y:200*0.6,
                    get xc(){return this.x}, get yc(){return this.y-this.height/2}},   
                center_line:200*0.6,
                r0:180,
                n:this.nrays,
            }
        },
        methods: {

            line_data(x1_offset,y1_offset,n) {
                var line1 = {}
                line1.x0 =0 
                line1.y0 = this.center_line - y1_offset
                line1.x1 = this.r0  - x1_offset
                line1.y1 = line1.y0  //// Math.sign

                var d = this.dcrystal
                var theta = Math.asin( n*this.nlambda/(2*d) )
                line1.x2 = line1.x1 + 200 *Math.cos(theta) 
                line1.y2 = line1.y1 - 200 *Math.sin(theta) 
                
                return line1
            },

            line1(n){ return this.line_data(4,0,n) },

            opacity(n){ 
                return `opacity: ${1/n} ;` // 
            },
            Crystalrot(){
                return `rotate(-${this.thetaC} ${this.sample.x} ${this.sample.y})` 
            }

        },
        computed:{

            sample(){ 
                //var sample = this.sample0  
                var sample = {}
                sample.width = this.sample_width
                sample.height = this.sample_height
                sample.x   = this.r0
                sample.y   = this.center_line
                sample.xc  = sample.x-sample.width/2
                sample.yc  = sample.y-sample.height/2
                sample.transform =  `rotate(${-this.thetaS} ${sample.x} ${sample.y})` 
                return sample
            },

        }
 
    };


</script>


<style scoped>

  /*  polyline{
       
    }*/

    .line{
        stroke-width:2.5;
        stroke: #557aac;
        stroke-linecap:round;
        /*opacity: 0.6; */
        /*opacity:1: 
         stroke-dasharray: 20, 0, 0 ;
         stroke: var(stroke); */
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

    svg{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   
    }

</style>
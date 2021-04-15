
<template>
    <!--
    <input v-model="theta2" placeholder="edit me">
    <input v-model="gamma" placeholder="edit me">
    <input v-model="thetaD" placeholder="edit me"> -->

    
    <div class="chart">
        <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" class="shadow">

            <rect class="monochromator" :width="monocromator.width" :height="monocromator.height" 
            fill-opacity="0.4" :x="monocromator.xc" :y="monocromator.yc"/>
            
            <rect v-if="shape=='Cuboid'" class="sample" :width="sample.width" :height="sample.height" 
            fill-opacity="0.8" :x="sample.xc" :y="sample.yc" :transform="sample.transform"/>

            <circle v-if="shape!='Cuboid'" class="sample" :r="sample_radius"
            fill-opacity="0.8" :cx="sample.x" :cy="sample.y"/>

            <rect class="sample analyzer" :width="analyzer.width" :height="analyzer.height" 
             :x="analyzer.x" :y="analyzer.y" :transform="analyzer.transform"/>

            <rect class="detector" :width="detector.width" :height="detector.height" 
            :x="detector.x" :y="detector.y" :transform="detector.transform"/>

            <line class="dashline x" :x1="sample.x" :y1="sample.y" :x2="width" :y2="sample.y"  />
            <line class="dashline y" :x1="sample.x" :y1="sample.y" :x2="sample.x" :y2="0" />

            <text :x="sample.x-10" y="15" fill="black"> y </text>
            <text :x="width-10" :y="sample.y+10" fill="black"> x </text>

            <polyline class="line 0"   :points="`${line1.x0},${line1.y0}  ${line1.x1},${line1.y1}  ${line1.x2},${line1.y2}   ${line1.x3},${line1.y3}`" fill="none"/>

            <polyline class="line up"  :points="`${line2.x0},${line2.y0}  ${line2.x1},${line2.y1}  ${line2.x2},${line2.y2}   ${line2.x3},${line2.y3}`" fill="none"/>

            <polyline class="line down" :points="`${line3.x0},${line3.y0}  ${line3.x1},${line3.y1}  ${line3.x2},${line3.y2}   ${line3.x3},${line3.y3}`" fill="none"/>

            <!--
            <linearGradient id="ReflectGradient" spreadMethod="reflect"  gradientUnits="userSpaceOnUse"  x1="0" x2="20" y1="0" y2="0" >  :x2="0.1*line3.tot_distance/ref_distance" 
                <stop offset="0%"  stop-color="blue"/><stop offset="100%" stop-color="orange"/>
            </linearGradient>  stroke="url(#ReflectGradient)"  -->
            <!--<polyline class="dash"   :points="`${line1.x0},${line1.y0}  ${line1.x1},${line1.y1}  ${line1.x2},${line1.y2}   ${line1.x3},${line1.y3}`" fill="none"/>-->

        </svg>
    </div>
  
</template>


<script>

 

    export default {
        name: "D3component",
        props:{
            shape:String,
            theta2s: String,
            gammas: String,
            theta_Ds: String,
            theta_sa:String,
            sample_width:Number,
            sample_height:Number,
            theta2:Number,
            gamma: Number,
            thetaD:Number,
            thetaS:Number,
            sample_radius:Number,
        },
        data() {
            return {              
                height: 200,
                width: 400,
                radius:20,
                center_line:200*0.6,
                r0:180,
                r1:100,
                r2:100,
                monocromator: {height:60,width:6, x:0,y:200*0.6,
                    get xc(){return this.x}, get yc(){return this.y-this.height/2}},
                sample0:   {height:60,width:30},
                analyzer0: {height:60,width:6},
                detector0: {height:60,width:6},
                line10: { x0:0 },
              
                //stroke:"url(#ReflectGradient)",
                //line2: () => line_data(100),
            }
        },
        //created: function() {

        //},
        components: {
        
        },
        methods: {

            line_data(x1_offset,y1_offset) {
                var line1 = {}
                line1.x0 =0 
                
                line1.y0 = this.center_line - y1_offset
                line1.x1 = this.r0  - x1_offset
                line1.y1 = line1.y0  //// Math.sign

                var offset1 = Math.sqrt(x1_offset**2 +y1_offset**2 )
                var beta =  (90-this.theta2)*Math.PI/180 - Math.atan( ((y1_offset/x1_offset)?(y1_offset/x1_offset) : 0 )  ) 
                var liner1   =  this.r1 + Math.sign(x1_offset)* offset1*( Math.sin(beta) - Math.cos(beta) * Math.tan(this.gamma*Math.PI/180))
                line1.x2 = line1.x1 + liner1 *Math.cos(this.theta2*Math.PI/180) 
                line1.y2 = line1.y1 - liner1*Math.sin(this.theta2*Math.PI/180) 
                
                var angle2 = 180-2*this.gamma-this.theta2
                var angle3 = -90+angle2-this.thetaD  //
                var ray_d_reflec =  (y1_offset * Math.cos(this.theta2*Math.PI/180) + x1_offset * Math.sin(this.theta2*Math.PI/180)) /Math.cos( this.thetaD*Math.PI/180) 
                line1.x3 =  this.detector.xcent - ray_d_reflec * Math.cos(angle3*Math.PI/180 )
                line1.y3 =  this.detector.ycent - ray_d_reflec * Math.sin(angle3*Math.PI/180 )
                line1.tot_distance = ray_d_reflec +  liner1 +  line1.x1
                return line1
            },

        },
        created() {
            return {
               // line2:this.line_data(100)
            }

        },
        computed:{
            // thetaD(){
            //    return this.thetaD_real-this.theta2
            //},
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
            analyzer(){
                //console.log(this.line_data)
                var analyzer = this.analyzer0
                analyzer.xcent = this.sample.x + this.r1*Math.cos(this.theta2*Math.PI/180 )
                analyzer.ycent = this.sample.y - this.r1*Math.sin(this.theta2*Math.PI/180 )
                analyzer.x = analyzer.xcent -analyzer.width/2; analyzer.y = analyzer.ycent -analyzer.height/2
                analyzer.transform = `rotate(${-this.gamma-this.theta2} ${analyzer.xcent} ${analyzer.ycent})` 
                return analyzer
            },
            detector(){
                var detector = this.detector0
                detector.xcent = this.analyzer.xcent  - this.r2 *Math.cos( (-this.theta2 -2*this.gamma)*Math.PI/180 ) 
                detector.ycent = this.analyzer.ycent  - this.r2 *Math.sin( (-this.theta2 -2*this.gamma)*Math.PI/180 ) 
                detector.x = detector.xcent - detector.width/2; detector.y = detector.ycent-detector.height/2
                detector.transform = `rotate(${-this.thetaD-2*this.gamma-this.theta2} ${detector.xcent } ${detector.ycent })`
                return detector
            },
            line1(){ return this.line_data(4,10)  },
            line2(){ return this.line_data(-2,-10)},
            line3(){ return this.line_data(0,0)   },
            ref_distance(){ return this.r0+this.r1 +this.r2 },

        }
 
    };


</script>


<style scoped>

  /*  polyline{
       
    }*/

    .line{
        stroke-width:2;
        stroke: #557aac;
        stroke-linecap:round;
        opacity: 0.6; 
        /*opacity:1: 
         stroke-dasharray: 20, 0, 0 ;
         stroke: var(stroke); */
    }
    /*
    .dash{
        opacity: 0.5;
        stroke-width:2;
        stroke: grey;
        stroke-dasharray: 0, 22, 18, 0 ; 
        stroke-linecap:round;
    }
    */ /*stroke: var(stroke); */

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
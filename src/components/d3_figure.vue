
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

            <rect class="monochromator" :width="monocromator.width" :height="monocromator.height" 
            fill-opacity="0.4" :x="monocromator.xc" :y="monocromator.yc"/>

            <rect  class="sample" :width="sample.width" :height="sample.height" 
            fill-opacity="0.8" :x="sample.xc" :y="sample.yc"/>
            <!--<circle class="sample" :cx="x2" :cy="y1" :r="radius"/>-->.

            <rect class="sample analyzer" :width="analyzer.width" :height="analyzer.height" 
             :x="analyzer.x" :y="analyzer.y" :transform="analyzer.transform"/>

            <rect class="detector" :width="detector.width" :height="detector.height" 
            :x="detector.x" :y="detector.y" :transform="detector.transform"/>

            <line class="dashline x" :x1="x2" :y1="y1" :x2="width" :y2="y1"  />
            <line class="dashline y" :x1="x2" :y1="y1" :x2="x2" :y2="0" />
            <!--<line class="dashline y2" :x1="l4X[0]" :y1="y1" :x2="l4X[0]" :y2="0" />-->

            <text :x="x2-10" y="15" fill="black"> y </text>
            <text :x="width-10" :y="y1+10" fill="black"> x </text>
            
            <line class="line 1" :x1="l1X0[0]" :y1="l1X0[1]-d_2_ry" :x2="l1X[0]-d_2_rx" :y2="l1X[1]-d_2_ry"/>
            <!--<line class="line 1" :x1="l1X0[0]" :y1="l1X0[1]" :x2="l1X[0]" :y2="l1X[1]"  />-->
            <line class="line 1p" :x1="x1" :y1="y1+d_2_ry" :x2="x2" :y2="y1+d_2_ry"/>

            <line class="line 2p" :x1="x2-d_2_rx" :y1="y1-d_2_ry" :x2="l4Xp[0]" :y2="l4Xp[1]" /> 
            <!--<line class="line 2" :x1="x2" :y1="y1" :x2="l2X[0]" :y2="l2X[1]" />-->
            <line class="line 2p" :x1="x2" :y1="y1+d_2_ry" :x2="l4X[0]" :y2="l4X[1]" />

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
            theta2s: String,
            gammas: String,
            theta_Ds: String,

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
                monocromator: {height:60,width:6, x:0,y:200*0.6,
                    get xc(){return this.x}, get yc(){return this.y-this.height/2}},
                sample: {height:60,width:15, x:180,y:200*0.6,
                    get xc(){return this.x-this.width/2}, get yc(){return this.y-this.height/2}},
                analyzer0: {height:60,width:6, r:100},
                detector0: {height:60,width:6, r2:100},
                //thetaD_real:20,
                thetaD:20,
                value: 20,
                d_2_ry:5,
                d_2_rx:0,
            }
        },
        created: function() {
            //this.analyzerc()

        },
        components: {
            Slider
        },
        methods: {

          //  get_data: function() {
        //    }
        },
        mounted() {
       
        },
        computed:{
            // thetaD(){
            //    return this.thetaD_real-this.theta2
            //},

            analyzer(){
                var analyzer = this.analyzer0
                analyzer.xcent = this.sample.x + analyzer.r*Math.cos(this.theta2*Math.PI/180 )
                analyzer.ycent = this.sample.y - analyzer.r*Math.sin(this.theta2*Math.PI/180 )
                analyzer.x = analyzer.xcent -analyzer.width/2; analyzer.y = analyzer.ycent -analyzer.height/2
                analyzer.transform = `rotate(${-this.gamma-this.theta2} ${analyzer.xcent} ${analyzer.ycent})` 
                return analyzer
            },
            detector(){
                var detector = this.detector0
                detector.xcent = this.analyzer.xcent  - detector.r2 *Math.cos( (-this.theta2 -2*this.gamma)*Math.PI/180 ) 
                detector.ycent = this.analyzer.ycent  - detector.r2 *Math.sin( (-this.theta2 -2*this.gamma)*Math.PI/180 ) 
                detector.x = detector.xcent - detector.width/2; detector.y = detector.ycent-detector.height/2
                detector.transform = `rotate(${-this.thetaD-2*this.gamma-this.theta2} ${detector.xcent } ${detector.ycent })`
                return detector
            },


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
            l3X() {
                return [this.l2X[0] - this.r2 *Math.cos( (-this.theta2 -2*this.gamma)*Math.PI/180 ),this.l2X[1] - this.r2 *Math.sin( (-this.theta2 -2*this.gamma)*Math.PI/180 ) ]
            },
            ray_d_reflec(){ //D=sqrt(x**2+y**2)/cos(theta2-gamma)    // soguro que puedes quitar el coseno al poner el r
                return  Math.sqrt(this.d_2_ry**2) *Math.cos(this.theta2*Math.PI/180) / Math.cos(this.gamma*Math.PI/180)
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
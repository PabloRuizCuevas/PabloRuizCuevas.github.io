
<template>
  <div class="page">
  
    <main>
        <div class="article"> 
           
            <h2> Geometric Reduction Factor of a cylinder </h2>

            <p> 
                The reduction factor of a cylinder can be calculated analyticaly for the case {{theta_Ds = theta2s}}:
            </p>  

            <div class="equation"> 
                {{equation1}}
            </div>

            <p>
                The cylinder has rotation symetry with respect to the z axis, therefore the reduction factor doesn't change with {{theta_sa}}.
            </p>
            
            <div class="image_container" style="margin-top: 20px">
                <img alt="Figure" src="/images/Rfcylinder.png">
                <figcaption> Reduction factor of a cylinder of r = 1 mm, $\Lambda$ = 0.0002 m </figcaption>
            </div>  

            <p> 
                For the general case there is no close expresion but it can be calculated using a Monte Carlo approach.
            </p>

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
            :theta_Ds="theta_Ds" shape="cylinder"
            :gamma="gamma" :theta2="theta2" :thetaD="0" :thetaS="thetaS"
            :sample_width="sample_width" 
            sample_height="sample_height"
            sample_radius="20" />
            
        </div>

    </main>
  
  </div>

</template>


<script>

    import D3component from "../figures/d3_figure_tools.vue"
    import Slider from '@vueform/slider'

    export default {
        name: "Latexpage2b",
        data() {
            return {
                theta2s: '$2\\theta$',
                gammas: '$\\gamma$',
                theta_Ds: '$\\theta_D - 2\\theta$',
                theta_sa: '$\\theta_S$',
                equation1:'$$ R(r, \\theta, \\Lambda) = \\frac{\\Lambda}{2 \\pi r  sin(2\\theta/2)} J_1 \\left ( \\frac{4 \\pi r sin(2\\theta/2)}{\\Lambda} \\right ) $$',
                theta2:30,
                gamma: 50,
                thetaD:20,
                thetaS:5,      
            }
        },
        components: {
            D3component,
            Slider
        },
        methods: {
            reRender() {
            if(window.MathJax) {
                console.log('rendering mathjax');
                window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub], () => console.log('done'));
            }
            }
        },
        mounted() {
            this.reRender();
        },
 
    };


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../figures/slider.css"></style>
<style scoped>

    .equation{
        justify-content: center;
        text-align: center;
    }

    h1{
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .image_container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
    }

    .equation{
        margin-top: 20px;
        justify-content: center;
        text-align: center;
    }

    figcaption{
        display: block;
        width: 80%;
        text-align: center;
        font-size: 0.9rem;
    }

    img {
        display: block;
        max-width: 70%;
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


</style>


<template>
  <div class="page">
  
    <main>
        <div class="article"> 
           
            <h2> Geometric Reduction Factor of a cuboid </h2>

            <p> 
                The reduction factor for a cuboid can be calculated analyticaly and the solugion is given by the literature <!--[quote]-->. The following equation describes the reduction factor for a not tilted cuboid:
            </p>  
            <div class="equation"> 
                {{equation1}}
            </div>

            <p> {{}}
                We can minimize this function obtaining the best $\theta_D$ for each  $2\theta$. that means, that we can tilt the detector in order to obtain the best Reduction possible factor.
            </p>
            
            <div class="image_container" style="margin-top: 20px">
                <img alt="Figure" src="/images/Heat.png">
                <figcaption> Reduction factor heat map for a {{theta_sa}} = 0 </figcaption>
            </div>  

            <p>  {{}}
                But in the most general case we can have the sample rotated by an angle of $\theta_S$, in that case the reduction factor is given by:
            </p>

            <div class="equation"> {{}}
                \( R=sinc \left (\frac{\pi t}{\Lambda} \cdot \left [ \cos \theta_S-\frac{\cos{(\theta_D-\theta_S)}}{\cos(2 \theta - \theta_D)} \right ] \right )\)   \(sinc \left (\frac{\pi \omega}{\Lambda} \cdot \left [\sin \theta_S +  \frac{\sin{(\theta_D-\theta_S)}}{\cos(2 \theta - \theta_D)}  \right ] \right )\)
            </div>

            <p>  {{}}
                To find the best reduction factor for this configuration we have developed an numerical optimizer, first we find the best possible \(\theta_S\) for each  \(\theta_D\), \(2\theta\) tuple and then we have find the best \(\theta_D\) for each \(2\theta\) conditioned to the previously calculated \(\theta_S\).
            </p>
            <p>  {{}}
                For performing an accurate optimization without falling in a local minimum we have used n different equally spaced origins of each optimization problem and then we keep the best optimum.
            </p>
           
            <D3component :theta_sa="theta_sa" :theta2s="theta2s" :gammas="gammas" :theta_Ds="theta_Ds" />
            
        </div>

    </main>
  
  </div>

</template>



<script>
    import D3component from "../figures/d3_figure.vue"

    export default {
        name: "Latexpage2",
        data() {
            return {
                theta2s: '$\\theta_2$',
                gammas: '$\\gamma$',
                theta_Ds: '$\\theta_D - \\theta_2$',
                theta_sa: '$\\theta_S$',
                equation1:'$R= sinc \\left (\\frac{\\pi\\omega}{\\Lambda} \\cdot \\frac{\\sin{\\theta_D}}{\\cos(2 \\theta - \\theta_D)}\\right )  sinc \\left (\\frac{\\pi t}{\\Lambda} \\cdot \\left [ \\frac{\\sin{\\theta_D}}{\\cos(2 \\theta - \\theta_D)} -1 \\right ] \\right ) $',
                equation2:''
            }
        },
        components: {
            D3component
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

</style>

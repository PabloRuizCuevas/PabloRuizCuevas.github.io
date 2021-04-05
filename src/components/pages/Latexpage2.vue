
<template>
  <div class="page">
  
    <main>
        <div class="article">

            <h1> MIEZE Theory</h1>

            <p>  As a time-of-flight {{latex2}} like measurement technique, the quality of the MIEZE signal is sensitive to flight path differences of the neutrons scattered in the experimental setup. This destruction/damping of the MIEZE signal compared to the undisturbed, only elastically scattered neutron beam is expressed by the reduction factor $R$, which unintuitively is supposed to be as high, close to 1, as possible. In this work we aim to calculate the reduction factor of a three-axis spectrometer (TAS) with enhanced energy resolution by means of an integrated MIEZE setup (MIEZETOP). Here, we consider solely the influence of instrument layout and sample geometry, which are the major contributions to the geometric reduction factor. The components of interest in a MIEZE-TAS instrument are the sample behind the precession devices, the analyzer crystal of the TAS and the CASCADE detector, a time resolved PSD. In particular this means, their shape, geometric configuration  and rotation with respect to each other.
            </p>

            <p class="equation">
             $$R = \frac{ |A| }{c}$$
            </p> 
 
            <p> We can minimize this function obtaining the best $\theta_D$ for each $2\theta$. that means, that we can tilt the detector in order to obtain the best Reduction possible factor. But in the most general case we can have the sample rotated by an angle of $\theta_S$, in that case the reduction factor is given by: 
            </p>  

            <div class="image_container">
                <img alt="Figure" src="/images/figure.svg">
            </div> 

            <p>00:14</p>
        </div>

    </main>
  
  </div>

</template>



<script>


    export default {
        name: "Latexpage2",
        data() {
            return {
            latex2: '$\frac{ |A| }{c}$'
            }
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

.article{
    margin-bottom:40px ;
}


img {
    display: block;
    width: 60%;
}

</style>

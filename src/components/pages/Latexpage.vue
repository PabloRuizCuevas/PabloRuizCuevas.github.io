
<template>
  <div class="page">
    <p class="author">Lukas Beddrich & Pablo Ruiz <br> Feb 7, 2021</p>

    <div class="abstract">
        <h2>Abstract</h2>
        <p> The <b>M</b>odulation of <b>I</b>nt<b>E</b>nsity with <b>Z</b>ero <b>E</b>ffort (<b>MIEZE</b>) techinque is a neutron scattering method dedicated to inelastic measurements with low energy transfers that require a correspondingly high energy resolution. The MIEZE technique is closely related to time-of-flight methods based on the concept of Lamor-precession labeling in neutron resonance spin echo (NRSE).

        </p>
    </div>
    <main>
        <div class="article">
            <h2> Instrument geometry</h2>
            <h3> time..</h3>
            <p>  As a time-of-flight like measurement technique, the quality of the MIEZE signal is sensitive to flight path differences of the neutrons scattered in the experimental setup. This destruction/damping of the MIEZE signal compared to the undisturbed, only elastically scattered neutron beam is expressed by the reduction factor \(R\), which unintuitively is supposed to be as high, close to 1, as possible.
                <label for="sn-1" class="sidenote-toggle sidenote-number"></label>
                <input type="checkbox" id="sn-1" class="sidenote-toggle" />
                <span class="sidenote"> This is a side note example that can be longer </span>
            In this work we aim to calculate the reduction factor of a three-axis spectrometer (TAS) with enhanced energy resolution by means of an integrated MIEZE setup (MIEZETOP). Here, we consider solely the influence of instrument layout and sample geometry, which are the major contributions to the geometric reduction factor.

            The components of interest in a MIEZE-TAS instrument are the sample behind the precession devices, the analyzer crystal of the TAS and the CASCADE detector, a time resolved PSD. In particular this means, their shape, geometric configuration  and rotation with respect to each other.
            </p>
       

            $$  R = sinc \left( \frac{\pi t}{\Lambda} \sqrt{a} \right)  $$

            <p> We can minimize this function obtaining the best \( \theta_D \)  for each   \( 2\theta \). that means, that we can tilt the detector in order to obtain the best Reduction possible factor.
            But in the most general case we can have the sample rotated by an angle of \(\theta_S \), in that case the reduction factor is given by: 
            </p>  
            <div class="image_container">
                <img alt="Figure" src="../../images/figure.svg">
            </div> 
            <p> 
            </p>  


        </div>
    
    </main>
  
  </div>

 
</template>

<script>

    export default {
        name: "Latexpage3",
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

            let prism = document.createElement('script')
            prism.setAttribute('src',"https://cdn.jsdelivr.net/npm/prismjs/prism.min.js")
            document.head.appendChild(prism)
        },
    };



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped url="https://latex.now.sh/prism/prism.css">

@import "../../style/latex.css";
 /*src="../style/latex.css"*/


 .image_container{
     display: flex;
    flex-direction: column;
     align-items: center;
     justify-content: center;

}

.caption{
    display: block;
    font-size: 0;
}

img {
    display: block;
    width: 60%;
}
</style>

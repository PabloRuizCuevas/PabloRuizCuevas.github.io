
<template>
  <div class="page">
    <p class="author">Lukas Beddrich & Pablo Ruiz <br> Feb 7, 2021</p>

    <div class="abstract">
        <h2>Abstract</h2>
        <p>
        In this pages we will give a brief explanation about neutron experiments using the <b>MIEZE</b> technique. This technique is used at the MIRA experiment at the FRMII to infer magnetic properties of ferromagnet materials such as Iron or Nikel, but in general can be used in a wide variety of neutron scattering experiments.
        </p>
    </div>

    <main>
        <div class="article">
            <h2> Introduction</h2>

            <p>
            The <b>M</b>odulation of <b>I</b>nt<b>E</b>nsity with <b>Z</b>ero <b>E</b>ffort (<b>MIEZE</b>) techinque is a neutron scattering method dedicated to inelastic measurements with low energy transfers that require a correspondingly high energy resolution. The MIEZE technique is closely related to time-of-flight methods based on the concept of Lamor-precession labeling in neutron resonance spin echo (NRSE)
            </p>
            <p>
            As a time-of-flight like measurement technique, the quality of the MIEZE signal is sensitive to flight path differences of the neutrons scattered in the experimental setup. There are a few possible geometries for neutrom beam, the sample and the detector, but use the three axis geometry at MIRAII, depicted in the figure bellow, using three axis we have enough degrees of freedom to minimize the destructive interferences of the neutron beam.
            </p>

            <h3> Instrument geometry </h3>

            <p> The destruction/damping of the MIEZE signal, caused by the neutrons flight path differences, compared to the undisturbed, only elastically scattered neutron beam is expressed by the reduction factor \(R\), which unintuitively is supposed to be as high, close to 1, as possible.
                <label for="sn-1" class="sidenote-toggle sidenote-number"></label>
                <input type="checkbox" id="sn-1" class="sidenote-toggle" />
                <span class="sidenote"> Tipically between 0 and 1 if we don't consider negative interferences, that can push it til -1. </span>
            In this work we aim to calculate the reduction factor of a three-axis spectrometer (TAS) with enhanced energy resolution by means of an integrated MIEZE setup (MIEZETOP). For now, we will consider solely the influence of instrument layout and sample geometry, which are the major contributions to the geometric reduction factor.
            </p>
            <p> 
            The components of interest in a MIEZE-TAS instrument are the sample behind the precession devices, the analyzer crystal of the TAS and the CASCADE detector, a time resolved PSD. In particular this means, their shape, geometric configuration  and rotation with respect to each other.
            </p>
            <p> 
            Fundamentally, the instruments consist of a neutron beam preparation stage, behind which the neutrons hit a sample get scattered with an angle of \(2\theta\) (for powders and single crystals given by the Bragg's law) then hit the analyzer (tilted  \(\gamma \) ), are reflected again and finally are absorbed in the CASCADE detector that is tilted with an angle of  \( \theta_D \).
            </p>

            <div class="image_container">
                <img alt="Figure" src="/images/three_axis.jpg">   
                <figcaption>  Three axis geometry at MIRAII </figcaption>                   
            </div> 

            <p>
            To calculate the reduction factor we will take into account the difference of path length given by the geometry and the one given due to the path length difference arising from the depth profile of the neutrons penetrating the analyzer before being scattered according to Bragg's law.
            </p>

            <p>
            We will multiply these two independent contributions to obtain the total reduction factor.
            </p>
            
            $$ R_{tot}=R_{Geo} \cdot R_{Ana} $$

            <h3> Geometric Reduction Factor, three axis geometry</h3>
           
            <p>
            In order to calculate the geometric reduction factor we will reduce our problem to the one that was already presented in the literature. <!--[REFERENCE-quotation].-->
            </p>
            <p>
            This approach is justified since the analyzer reflects the beam keeping the rays parallel to each other, so it is easy to simplify the problem. We will use the virtual image of the detector to obtain a two axis geometry that is already solved by the literature [figure 1].
            </p>

            <div class="image_container">
                <img alt="Figure" src="/images/figure.svg"> 
                <figcaption>  Three axis geometry and degrees of fredoom of the setup  \(\theta_2\) ,\(\theta_D\) and  \(\gamma\), the real detector in blue is projected to his virtual image at the top of the image.  </figcaption>         
            </div> 

            <p>
               Note that with this notation  \(\theta_2\) ,\(\theta_D\) and  \(\gamma\)  is given by:
            </p>
            <div class="equation">
                $$ \theta_2 =\arcsin{\frac{ \lambda}{2d_S}}$$ $$\gamma=\arccos{\frac{ \lambda}{2d_A} } $$ $$\theta_D= 2\theta -\theta_D' $$
            </div>
            <p>
                Where \(\gamma\) is the angle of incidence of the neutron beam with the analyzer, so arccos is used instead of arcsin (that would be for the complementary angle). And \(\theta_D\) who belong to the virtual plane is expressed in terms of the angles \(2\theta\) and \(\theta_D'\) of the real plane.
            </p>


            <D3component :theta2s="theta2s" :gammas="gammas" :theta_Ds="theta_Ds"  />

        </div>
    
    </main>
  
  </div>

 
</template>

<script>
    
    import D3component from "../d3_figure2.vue"

    export default {
        name: "Latexpage1",
        data() {
            return {
                latex2:'$1$',
                latex3: '$$R = \\frac{ |A| }{c}$$ ',
                theta2s: '$\\theta_2$',
                gammas: '$\\gamma$',
                theta_Ds: '$\\theta_D$',
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

<style scoped>

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
        width: 60%;
    }
</style>

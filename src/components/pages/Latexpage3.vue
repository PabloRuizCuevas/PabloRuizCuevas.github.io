
<template>
  <div class="page">
  
    <main>
        <div class="article">

            <h1> Monte Carlo Reduction Factor</h1>

            <!-- <h3> Introduction</h3> -->

            <p> A Monte Carlo {{latex2}} appromimation can gives us a general approach to calculate the reduction factor whenever no analytical solution is possible. First of all we need to know the difference of path length given of two parallel beams with respect to the optical axis, this is already calculated in the literature <!--{Reference}--> and is given by: 
                $$\Delta L_2= x - \frac{x*cos({\theta_D}) + y * sin{(\theta_D)}}{cos{(2 \theta - \theta_D )}} $$ Where X and Y are the components of the vector r denoting the distance of an arbitrary scattering point to the center of the sample. These leads to a phase difference at the detector given by: $$\Delta \Phi_D = 2 \pi \frac{\Delta L_2 }{ \Lambda} $$

                And where  \( \Lambda  \)  is the distance traveled by a neutron of velocity v over one period of the oscillating signal. So the general equation for the reduction factor will be the integral over the  \( cos(\Delta \psi_D) \) over all possible neutron sample interaction points.
                $$ R_{sample} =  \frac{ \int{ cos( { \Delta\psi_D} ) dV }}{V} $$

                This integral, is has not always an analytical solution but is easy to calculate by a standard MC algorithm. First of all we will need a evenly distributed cluster of 3D random points inside our sample shape. And then we will average over all the $cos(\Delta\psi_D)$ of the random points. So we end up having the next equation:
                $$  R_{sample} =   \lim_{N\to\infty}  \frac{1}{N}\sum_{ i = 0 }^{N} cos( { \Delta\psi_D})_i $$

                The last thing we need to do is ensure that our approach gives the same result in the cases that we have an analytical formula.
            </p>

            <div class="image_container">
                <img alt="Figure" src="/images/Mc.png">
                <figcaption>  MC simulations with different number of iterations vs the real analytic value, The shape chosen for this simulation it was a cylinder.</figcaption>
            </div>  
            <p>  The error of MC decays with the square root of the random points used, but as the reduction factor is often zero, the relative error is not a good measure of the precision of this method, in any case for most applications we have estimated that 1e5 are enough iterations to have a reasonably good convergence.
                 Finally we can calculate the reduction factor for different shapes and compare it with the theory
            </p>

            <div class="image_container">
                <img alt="Figure" src="/images/RF_shapes.png">
                <figcaption> Reduction factor for different shapes and comparation with theory. </figcaption>
            </div>  

        </div>

        <!--
        <div id="app">
            <input v-model="latex"/><br>
            <div :key="latex">{{latex}}</div>
        </div>
        -->

    </main>
  
  </div>

 
</template>



<script>

    export default {
        name: "Latexpage3",
        data() {
            return {
            latex: '$$\\frac{a}{b}$$',
            latex2: '$\Lambda$'
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
        created() {
               
        },
        mounted() {
            this.reRender();
        },

        /*      
        mounted() {
            this.reRender();
        },
        watch: {
            latex: function() {
            console.log('data changed');
            this.$nextTick().then(()=>{
                this.reRender();
            });
            }
        }
        */
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
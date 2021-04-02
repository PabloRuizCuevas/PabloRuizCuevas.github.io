
<template>
  <div class="page">
  
    <main>
        <div class="article">

            <h1> Critical dynamics of ferromagnets</h1>

            <h3> Introduction</h3>

            <p>  The dynamic scaling functions for ferromagnets near the critical temperature are determined using the mode coupling theory  </p>
       
            <p> We can calculate the dynamic scale function neglecting the dipole forces in the paramagnetic phase as is done by {reference}, but in our case we will follow {reference}
 wich derives the Kubo formulas for the transport coefficients without neglecting the dipole interactions. 
            </p> 

            <p class="equation">
 \( \Gamma^L(q,g) = \frac{J^2 K_b T}{\pi^2\chi^L(q,g)} \int_{-1}^{1} d\eta \int_{0}^{\infty} dk k^2  \)
\( [ v^{L}_{TT}(k,q,g,\eta) \frac{\chi^T(q,g)\chi^T(|q-k|,g)}{\Gamma^T(q,g)+\Gamma^T(|q-k|,g)} \)
\(+v^{L}_{LT}(k,q,g,\eta) \frac{\chi^L(q,g)\chi^T(|q-k|,g)}{\Gamma^L(q,g)+\Gamma^T(|q-k|,g)} ] \)
             </p> 

             <p class="equation">
 \( \Gamma^T(q,g) = \frac{J^2 K_b T}{\pi^2\chi^T(q,g)} \int_{-1}^{1} d\eta \int_{0}^{\infty} dk k^2 \) 
 \( [ v^{T}_{TT}(k,q,g,\eta) \frac{\chi^T(q,g)\chi^T(|q-k|,g)}{\Gamma^T(q,g)+\Gamma^T(|q-k|,g)} \)
 \( +v^{L}_{LT}(k,q,g,\eta) \frac{\chi^L(q,g)\chi^T(|q-k|,g)}{\Gamma^L(q,g)+\Gamma^T(|q-k|,g)} \)
 \( +v^{L}_{LT}(k,q,g,\eta) \frac{\chi^L(q,g)\chi^T(|q-k|,g)}{\Gamma^L(q,g)+\Gamma^T(|q-k|,g)} ]\) 
            </p> 
            <p>
<<<<<<< HEAD
                In general to solve the set of integral coupled equeations will not be easy and we will make first a change of coordinates and make some aproximations
            </p>  

            <div class="image_container">
                <img alt="Figure" src="../../images/figure.svg">
                <caption>  MC simulations with different number of iterations vs the real analytic value, The shape chosen for this simulation it was a cylinder.</caption>
            </div>  
            
        </div>
    
=======
                In general to solve the set of integral coupled equeations will not be easy and we will make first a change of coordinates and make some aproximations.
            </p>  

            <div class="image_container">
                <img alt="Figure" src="/images/ferromagnets.png">
                <figcaption>  fitcap fig cap</figcaption>
            </div>  
            
            <p>
                In general to solve the set of integral coupled equeations will not be easy and we will make first a change of coordinates and make some aproximations.
            </p>  

        </div>

>>>>>>> main
    </main>
  
  </div>

 
</template>

<script>


    export default {
        name: "Latexpage4",
<<<<<<< HEAD
 
=======
>>>>>>> main
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


</style>

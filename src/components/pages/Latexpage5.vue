
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
                In general to solve the set of integral coupled equeations will not be easy and we will make first a change of coordinates and make some aproximations
            </p>  

        
            <img alt="Figure" src="../../images/figure.svg">

            
        </div>
    
    </main>
  
  </div>

 
</template>

<script>


    export default {

        name: 'Latexpage2',
        mounted() {

            let mathscript = document.createElement('script')
            mathscript.setAttribute('src',"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js")
            document.head.appendChild(mathscript)
        },
    }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.equation{
    justify-content: center;
    text-align: center;
}

h1{
    margin-top: 20px;
    margin-bottom: 20px;
}

</style>

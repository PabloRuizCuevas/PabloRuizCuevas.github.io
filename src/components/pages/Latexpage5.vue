
<template>
  <div class="page">
  
    <main>
        <div class="article">

            <h1> The scattering function</h1>

            <h3> Introduction</h3>

            <p>  The dynamic scaling functions for ferromagnets near the critical temperature are determined using the mode coupling theory  </p>
       
            <p> We can calculate the dynamic scale function neglecting the dipole forces in the paramagnetic phase as is done by {reference}, but in our case we will follow {reference}
 wich derives the Kubo formulas for the transport coefficients without neglecting the dipole interactions. 
            </p> 


            <div class="image_container">
                <img alt="Figure" src="/images/ferromagnets.png">
                <figcaption>  Approximation to the kubo equation solution</figcaption>
            </div>  
            
            <p>
                In general to solve the set of integral coupled equeations will not be easy and we will make first a change of coordinates and make some aproximations.
            </p>  

        </div>

    </main>
  
  </div>

 
</template>

<script>


    export default {
        name: "Latexpage4",
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

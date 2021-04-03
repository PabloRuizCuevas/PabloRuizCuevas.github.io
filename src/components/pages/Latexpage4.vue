
<template>
  <div class="page">
  
    <main>
        <div class="article">

            <h1> Image analysis</h1>

            <p>  We can calculate the reduction factor $R$ or  \(\theta_S \)  \(\theta_S \)  \(\theta_S \) of the real images we get in the detector by analyzing them.  First we need to take the image from the mira detector and convert it to a matrix, we crop the image in the place we observe most of the neutrons collide, in the case we analize here we can observe clearly the footprint of the cilinder of nikel we used as a sample.</p>

            <div class="image_container">
                <img alt="Figure" src="/images/image2.png">
                <figcaption> Image of one of the 16 detector plates.</figcaption>
            </div>  
       
            <p> The neutron detector consist has a total of 16 neutron sensitive layers, and therefore we have 16 of this images.The intensity they receive will depend on the reduction factor we have calculated in previos articles and in general it depends in the path length difference between the neutrons, the spin precesion of the neutron will lead to path differences causing destructive or constructive interferences that can be detected.
            </p> 

            <div class="image_container">
                <img alt="Figure" src="/images/image.png">
                <figcaption> Croped image of one of the 16 detector plates.</figcaption>
            </div>  

            <p> The reduction factor in our case will depend on the contrast and can be calculated by fitting our data by an armonic function.
            </p> 

            <p class="equation">
            $$ A * sin(bx+c)$$ 
            </p> 

            <p> The reduction factor varies sligthly for each part of the image, but we can assume it more or less constant, taking the 16 images and summing up their intensity we can simply make a fit that will  
            </p>  

            <div class="image_container">
                <img alt="Figure" src="/images/fit.png">
                <figcaption> Croped image of one of the 16 detector plates.</figcaption>
            </div> 

            <p> Finall the contrast is calculated using the fitted values of the armonic equation:
            </p>  


            <p class="equation">
             $$ R = \frac{ |A| }{c} $$
            </p> 
 
            <p>
                To fit the equation we can simply use any python library, the error will be also given by the fit.
            </p>  

            <p>
                If we need an alternative method to get more precision, specially if the difference of travel path between the different part of the images is not neglectable, we have developed a method inspired in the boostrap method. We will make a second crop in the image to analyze and calculate the reduction factor of this second crop, we repeat this procces for randomly generated crops of different size, depending in our necesities, and we can calculate the final contrast as the average value of all the crops. The error in this case is calculated using the sample standard deviation. In practice, for our case, this method didn't decrease the error but gave us a sligthly bigger contrast.
            </p>  

            <div class="image_container">
                <img alt="Figure" src="/images/histogram.png">
                <figcaption> The outcome of the constrast calculated over 50000 calculations with different crops of the image. </figcaption>
            </div> 

            <p>
                In the code we serve in this page to dowload you can a jupiter notebook with exemplary data and the fits we have seen here.
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

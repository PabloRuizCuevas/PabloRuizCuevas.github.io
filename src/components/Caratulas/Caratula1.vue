
<template>

    <div class="container" >

        <div> published on Feb 18 2021 </div>
        <h1 > MIEZE and three axis geometry </h1>
        <div class="image">
            <img alt="geometry" src="../../images/geometry.png">
        </div>
        <p> The <b>M</b>odulation of <b>I</b>nt<b>E</b>nsity with <b>Z</b>ero <b>E</b>ffort (<b>MIEZE</b>) techinque is a neutron scattering method dedicated to inelastic measurements with low energy transfers that require a correspondingly high energy resolution. The MIEZE technique is closely related to time-of-flight methods based on the concept of Lamor-precession labeling in neutron resonance spin echo (NRSE)...
        </p>
        <a> Read - 7 min </a>
        
    </div>

</template>


<script>

    export default {
        name: 'Caratula',
        components: {
            
        },

    }

</script>


<style scoped>

.container{
    display: flex;
    flex-wrap:       wrap;
    flex-direction: column;
    max-width: 100%;
    border-bottom: solid rgb(218, 216, 216) ;
    border-width: thin;
    margin-top: 60px;

}

img{
    max-width: 100%;
    height: auto;
}

.image {
  max-width: 100%;
  margin-top:30px ;
  height: auto;

}

</style>

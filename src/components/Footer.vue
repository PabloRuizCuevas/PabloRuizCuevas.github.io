
<template>

    <footer id="footer">
        <p>Web author: Pablo Ruiz Cuevas<br>
        Developed using vue.js, web repository at <a href= "https://github.com/PabloRuizCuevas/PabloRuizCuevas.github.io" > Github </a> 
        <!--<a href="pablo.r.c@livecom">pablo.r.c@livecom</a>--></p>
    </footer>

</template>


<script>

    export default {
        name: 'Footer',
        components: {
            
        },
        methods:{

        }
    }

</script>


<style scoped>

p{  
    margin-top:0px;
    color: honeydew;
    text-align: center;
}


#footer {
    background-color: rgb(0, 0, 0);
    flex-shrink: 0; 
    flex: 1;
    padding:10px;
    margin-top: 50px;
    margin-bottom: 0px;
    text-align: center;
    border-top: solid rgb(218, 216, 216) ;
    border-width: thin;
}

</style>

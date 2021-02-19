
<template>

    <footer class="footer">
        <p>Author: Pablo Ruiz Cuevas<br>
        <a href="pablo.r.c@livecom">pablo.r.c@livecom</a></p>
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

    color: honeydew;
}


.footer {
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

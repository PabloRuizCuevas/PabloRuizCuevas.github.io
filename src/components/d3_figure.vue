
<template>
    <div id="side">
        <img alt="Vue logo" src="../images/profile5.png">
        <div style="margin-top: 20px"> 
            <b> Pablo Ruiz </b>
        </div>
        <div>Research at FRMII
        </div>
    </div>
</template>


<script>

    export default {
        name: 'Side',
        components: {
            
        },
    }

</script>


<style scoped>

#side {
    position: fixed;
    align-content: center;
    margin-top: 60px;
}


img {
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/*
@media only screen and (min-width: 1500px) {
    #side {
        position: fixed;
        align-content: center;
        width: 7.5vw;  
    }
}*/

</style>

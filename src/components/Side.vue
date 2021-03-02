
<template>
    <div id="side">
        <img alt="Vue logo" src="../images/profile5.png">
        <div> <b> Pablo Ruiz </b>
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
    width: 130px;
    margin-left: 80px;
    margin-top: 60px;
}

img {
  width: 100%;
  padding-bottom: 20px ;
}

</style>

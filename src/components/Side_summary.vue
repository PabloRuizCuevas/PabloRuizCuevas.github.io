
<template>
    <div id="Side_summary">
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
        name: 'Side_summary',
        components: {
        },
    }

</script>


<style scoped>

#Side_summary {
    position: fixed;
    align-content: center;
    width: 130px;
    margin-left: 80px;
    margin-top: 60px;
}

img {
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

</style>

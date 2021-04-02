
<template>
    <div id="Side_summary">
        <a :href=code  download><button class="dowloads"> <img  class="logo" alt="logo" src="/python.png"> Download </button></a>
    </div>
</template>


<script>

    export default {
        name: 'Side_summary',
        components: {
        },
        props: {
            code: String,
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

 /* Style buttons */
.dowloads {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    border: none;
    color: white;
    padding: 12px 20px;
    cursor: pointer;
    font-size: 13px;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: #557aac; /* Green */
    border: 2px solid #557aac; /* Green */
    border-radius: 4px;
}

/* Darker background on mouse-over */
.dowloads:hover {
    background-color: #0b4188;
    border: 2px solid #0b4188; 
} 

.logo {

    display: flex;
    align-items: center;
    height: 20px;
    margin-left: 0;
    margin-right: auto;

}

a{text-decoration: none;}

</style>

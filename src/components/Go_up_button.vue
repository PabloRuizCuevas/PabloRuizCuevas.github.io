
<template>
    <div id="go_up">
        <button class="dowloads"> Up </button>
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

#go_up {
    position: fixed;
    left:87vw; top:80vh; 
    align-content: center;
  /*
    margin-left: 5vw;
    margin-top: 70vh ;*/
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


a{text-decoration: none;}

</style>

<template>

  <div style="margin-top: 50px; display: flex;flex-direction:row ; ">
    
    <label class="container">
      <input type="checkbox" v-model="autoupdate" true-value="yes" false-value="no" />
      <span class="checkmark"></span>
    </label>

     Auto update plot
  </div>

  <div class="chart" >
    <vue3-chart-js
        :id="doughnutChart.id"
        ref="chartRef"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
        :options="doughnutChart.options"
    ></vue3-chart-js>

     <div style="text-align: center;"><b>2<i>θ</i></b> [degrees]</div>


    <button @click="updateChart">Update Chart</button>
    <button type="submit" @click="exportChart">Export Chart as PNG</button>

  </div>
</template>

<script>
import { ref } from 'vue'
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'


export default {
  name: 'App',
  components: {
    Vue3ChartJs,
  },
  props: {
    datax: Array,
    datay: Array,
    minx: Number,
    maxx: Number,
    miny: Number,
    maxy: Number,
    theta2: Number,
  },
  data() {
    return {
      autoupdate: "yes",
      context: [],
    }
  },
  methods: {


  },
  
  setup (props) {
    const chartRef = ref(null)

    const customcolor = (context) => {
      let index = context.dataIndex;
      //let value = context.dataset.data[ index ];
      return index == parseInt(props.theta2/2+45)  ? //|| value >= 8
            "#aa1111" :
            "#557aac" ;
    }

    const doughnutChart = {
      id: 'line',
      type: 'line',
      labels: props.datax.map(String),
      data: {
        labels: props.datay,
        datasets: [
          {
            label: 'Reduction factor',
            backgroundColor:  customcolor,
            data: props.datax,
          },
          {
            label: 'Detector position',
            backgroundColor:  "#aa1111",
          },
        ],
      },
      options: {
        animation: false,
        scales: {
            y: {
                type: 'linear',
                min: -0.4,
                max: 1.2
            },
            x: {
                type: 'linear',
                min: -90,
                max: 90
            }
        }
      }
    }

    const updateChart = () => {
      doughnutChart.data.labels = props.datay
      doughnutChart.data.datasets = [
        {
          label: 'Reduction factor',
          backgroundColor: customcolor,
          data: props.datax,
          options: {
            animation: false,
            scales: {
                y: {
                    type: 'linear',
                    min: props.miny,
                    max: props.maxy
                },
                x: {
                    type: 'linear',
                    min: props.minx,
                    max: props.maxx
                }
            }
          }
        },
        {
          label: 'Detector position',
          backgroundColor:  "#aa1111",
        },
      ]

      chartRef.value.update()
    }

    const exportChart = () => {
      let a = document.createElement('a')
      a.href = chartRef.value.chartJSState.chart.toBase64Image()
      a.download = 'Reduction_Factor.png'
      a.click()
      a = null
    }

    return {
      doughnutChart,
      updateChart,
      chartRef,
      exportChart
    }
  },
  watch:{
    
      datay(){
        if(this.autoupdate=="yes"){
          this.updateChart()
      }

    }

  }
}
</script>

<style scoped>

.number_text {
  text-align: justify;
  margin-bottom: 0px;
}

.number_text:after {
  content: "";
  display: inline-block;
  width: 100%;
  
}


.chart{
  /*height:800px;*/
  width: 30vw; 
  display: flex;
  flex-direction:column;
}

@media only screen and (max-width: 900px) {
  .chart{
    width: 70vw; 
  }
}

.number_container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-evenly;
    
}
input{
    display: block;
    width: 40%;
    margin-top:-20px ;
    margin-left:10px;
    margin-bottom:10px;
    margin-right:10px;
}

 /* Customize the label (the container) */

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #557aac; /*#0a66ac */
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
} 

</style>
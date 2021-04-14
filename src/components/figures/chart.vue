<template>
  <div style="height:600px;width: 600px;display: flex;flex-direction:column;">
    <vue3-chart-js
        :id="doughnutChart.id"
        ref="chartRef"
        :type="doughnutChart.type"
        :data="doughnutChart.data"
        :options="doughnutChart.options"
    ></vue3-chart-js>

    <button @click="updateChart">Update Chart</button>
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
    msg: String,
    datax: Array,
    datay: Array,
  },
  setup (props) {
    const chartRef = ref(null)

    const doughnutChart = {
      id: 'line',
      type: 'line',
      labels: props.datax.map(String),
      data: {
        labels: props.datay,
        datasets: [
          {
            label: 'Reduction factor',
            backgroundColor: [
              '#00D8FF',
            ],
            data: props.datax
          }
        ]
      }
    }

    const updateChart = () => {
      doughnutChart.data.labels = props.datay
      doughnutChart.data.datasets = [
        {
          backgroundColor: [
            '#00D8FF',
          ],
          data: props.datax
        }
      ]

      chartRef.value.update()
    }

    return {
      doughnutChart,
      updateChart,
      chartRef
    }
  },
}
</script>
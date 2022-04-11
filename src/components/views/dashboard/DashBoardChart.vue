<template>
  <v-col
    v-for="(chart, index) in chartData"
    :key="index"
    cols="12"
    md="4"
  >
    <v-card>
      <v-card-title>{{ chart.title }}</v-card-title>
      <v-card-subtitle>{{ chart.subTitle }}</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <ev-chart
              :data="chart.data"
              :options="chart.options"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import chartJsonData from '@/data/chartJsonData.json'

export default {
  name: 'DashBoardChart',
  setup () {
    const chartData = chartJsonData
    const data = {
      series: {
        series1: { name: 'series#1' },
      },
      labels: ['value1', 'value2', 'value3', 'value5', 'value5'],
      data: {
        series1: [100, 150, 51, 150, 350],
      },
    }

    const options = {
      type: 'bar',
      axesX: [{
        type: 'step',
      }],
      axesY: [{
        showAxis: true,
        type: 'linear',
        startToZero: true,
        autoScaleRatio: 0.1,
      }]
    }

    return {
      chartData,
      data,
      options
    }
  }
}
</script>

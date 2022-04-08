<template>
  <v-col
    v-for="(chartData, index) in chartJsonData"
    :key="index"
    cols="12"
    md="4"
  >
    <v-card>
      <v-card-title>{{ chartData.title }}</v-card-title>
      <v-card-subtitle>{{ chartData.subTitle }}</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <ev-chart
              :data="chartData.data"
              :options="chartData.options"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>

export default {
  name: 'DashBoardChart',
  props: {
    chartJsonData: {
      type: Array,
      required: true
    }
  },
  setup () {
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
      data,
      options
    }
  }
}
</script>

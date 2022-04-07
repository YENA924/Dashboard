<template>
  <v-col cols="12" md="4">
    <v-card>
      <v-card-title>타이틀</v-card-title>
      <v-card-subtitle>서브 타이틀</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <ev-chart
              :data="chartData"
              :options="chartOptions"
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
  setup () {
    const chartData = {
      series: {
        series1: { name: 'series#1' },
      },
      labels: ['value1', 'value2', 'value3', 'value5', 'value5'],
      data: {
        series1: [100, 150, 51, 150, 350],
      },
    }

    const chartOptions = {
      type: 'bar',
      axesX: [{
        type: 'step',
      }],
      axesY: [{
        showAxis: true,
        type: 'linear',
        startToZero: true,
        autoScaleRatio: 0.1,
      }],
    }

    return {
      chartData,
      chartOptions
    }
  }
}
</script>

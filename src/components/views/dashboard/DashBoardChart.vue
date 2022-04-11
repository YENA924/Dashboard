<template>
  <v-col v-for="(chart, index) in chartData" :key="index" cols="12" md="4">
    <v-card>
      <v-card-title>{{ chart.title }}</v-card-title>
      <v-card-subtitle>{{ chart.subTitle }}</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <ev-chart :data="chart.data" :options="chart.options" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: "DashBoardChart",
  setup() {
    const time = dayjs().format('YYYY-MM-DD HH:mm:ss')
    const chartData = [
      {
        title: "Daily Sales",
        subTitle: "55% increase in today sales.",
        data: {
          series: {
            series1: {
              name: "series#1",
            }
          },
          labels: [
            dayjs(time),
            dayjs(time).add(1, 'day'),
            dayjs(time).add(2, 'day'),
            dayjs(time).add(3, 'day'),
            dayjs(time).add(4, 'day'),
            dayjs(time).add(5, 'day'),
            dayjs(time).add(6, 'day')
          ],
          data: {
            series1: [10, 18, 8, 18, 20, 19, 35]
          }
        },
        options: {
          type: "line",
          width: "100%",
          legend: {
            show: false,
          },
          axesX: [
            {
              type: "time",
              showGrid: false,
              timeFormat: "MM/DD",
              interval: "day",
              labelStyle: {
                color: "#A4A4A4",
                fontSize: "11px",
                fontFamily: "Roboto",
              }
            }
          ],
          axesY: [
            {
              showAxis: true,
              type: "linear",
              startToZero: true,
            }
          ]
        }
      },
      {
        title: "Email Subscription",
        subTitle: "Last Campaign Performance",
        data: {
          series: {
            series1: {
              name: " 통계",
            }
          },
          labels: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
          ],
          data: {
            series1: [
              580, 420, 250, 690, 580, 420, 380, 410, 590, 600, 680, 800,
            ]
          }
        },
        options: {
          type: "bar",
          axesX: [
            {
              type: "step",
            }
          ],
          axesY: [
            {
              showAxis: true,
              type: "linear",
              startToZero: true,
              range: [0, 200, 400, 600, 800],
            },
          ],
          legend: {
            show: false,
          }
        }
      },
      {
        title: "Completed Tasks",
        subTitle: "Last Campaign Performance",
        data: {
          series: {
            series1: {
              name: "series#1"
            }
          },
          labels: [
            dayjs(time),
            dayjs(time).add(1, 'day'),
            dayjs(time).add(2, 'day'),
            dayjs(time).add(3, 'day'),
            dayjs(time).add(4, 'day'),
            dayjs(time).add(5, 'day'),
            dayjs(time).add(6, 'day')
          ],
          data: {
            series1: [10, 15, 5, 15, 20, 15, 40, 30],
          }
        },
        options: {
          type: "line",
          width: "100%",
          legend: {
            show: false,
          },
          axesX: [
            {
              type: "time",
              showGrid: false,
              timeFormat: "MM/DD"
            }
          ],
          axesY: [
            {
              showAxis: true,
              type: "linear",
              startToZero: true,
            }
          ]
        }
      }
    ]

    return {
      chartData
    }
  }
}
</script>

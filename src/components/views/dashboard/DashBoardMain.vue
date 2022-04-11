<template>
  <v-container fluid>
    <v-row>
      <dash-board-chart></dash-board-chart>
      <dash-board-icon></dash-board-icon>
      <dash-board-grid></dash-board-grid>
      <dash-board-tab-grid></dash-board-tab-grid>
    </v-row>
  </v-container>
</template>

<script>
import DashBoardChart from './DashBoardChart'
import DashBoardGrid from './DashBoardGrid'
import DashBoardIcon from './DashBoardIcon'
import DashBoardTabGrid from './DashBoardTabGrid'

export default {
  name: 'DashboardMain',
  components: { DashBoardChart, DashBoardIcon, DashBoardGrid, DashBoardTabGrid }
}
</script>

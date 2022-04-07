<template>
  <v-container fluid>
    <v-row>
      <dash-board-chart></dash-board-chart>
      <dash-board-chart></dash-board-chart>
      <dash-board-chart></dash-board-chart>
      
      <dash-board-icon></dash-board-icon>
      <dash-board-icon></dash-board-icon>
      <dash-board-icon></dash-board-icon>
      <dash-board-icon></dash-board-icon>

      <dash-board-grid></dash-board-grid>

      <dash-board-tab-grid></dash-board-tab-grid>
      <!-- <edit-user-info></edit-user-info>
      <user-info></user-info> -->
    </v-row>
  </v-container>
</template>

<script>
import DashBoardChart from './views/dashboard/DashBoardChart'
import DashBoardIcon from './views/dashboard/DashBoardIcon'
import DashBoardGrid from './views/dashboard/DashBoardGrid'
import DashBoardTabGrid from './views/dashboard/DashBoardTabGrid'
// import EditUserInfo from './views/userProfile/EditUserInfo'
// import UserInfo from './views/userProfile/UserInfo'


export default {
  name: 'MainContents',
  // components: { EditUserInfo, UserInfo, VChart },
  components: { DashBoardChart, DashBoardIcon, DashBoardGrid, DashBoardTabGrid }
}
</script>

<style>
  .ev-button.type-text {
    color: #ffffff;
    background-color: #FF7BA9;
  }
  
  .ev-text-field .ev-input,
  .ev-text-field .ev-textarea {
    border: 1px solid #FFBED8;
  }

  .ev-text-field:hover .ev-input,
  .ev-text-field:focus .ev-input,
  .ev-text-field:hover .ev-textarea,
  .ev-text-field:focus .ev-textarea {
    border: 1px solid #FFBED8;
  }
  .ev-text-field .ev-input:hover,
  .ev-text-field .ev-input:focus,
  .ev-text-field .ev-textarea:hover,
  .ev-text-field .ev-textarea:focus {
    border: 1px solid #FFBED8;
  }
</style>
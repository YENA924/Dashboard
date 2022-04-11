<template>
  <v-container>
    <v-row>
      <dash-board-chart></dash-board-chart>
      <dash-board-icon></dash-board-icon>
      <dash-board-grid></dash-board-grid>
      <dash-board-tab-grid></dash-board-tab-grid>
      <!-- <edit-user-info></edit-user-info>
      <user-info></user-info> -->
    </v-row>
  </v-container>
</template>

<script>

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
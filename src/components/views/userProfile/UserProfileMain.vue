<template>
  <v-container fluid>
    <v-row>
      <edit-user-info></edit-user-info>
      <user-info></user-info>
    </v-row>
  </v-container>
</template>

<script>
import EditUserInfo from './EditUserInfo'
import UserInfo from './UserInfo'

export default {
  name: 'DashboardMain',
  components: { EditUserInfo, UserInfo }
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
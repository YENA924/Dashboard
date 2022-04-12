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

<template>
  <v-list
    density="compact"
    bg-color="#65C18C"
    class="color--white"
    elevation="2"
  >
    <v-list-item
      :prepend-avatar="require('@/assets/avatar.png')"
      title="Vue Dashboard"
    >
    </v-list-item>
  </v-list>

  <v-list
    nav
    bg-color="transparent"
    active-color="#65C18C"
  >
    <v-list-item
      prepend-icon="mdi-view-dashboard"
      title="Dashboard"
      value="dashboard"
    ></v-list-item>
    <v-list-item
      prepend-icon="mdi-account"
      title="User Profile"
      value="userProfile"
    ></v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
  .color--white { color: #ffffff !important }
</style>

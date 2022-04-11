<template>
  <v-app>
    <v-navigation-drawer
      app
      :image="require('@/assets/bg-navigation-menu.png')"
    >
      <side-bar></side-bar>
    </v-navigation-drawer>
    <v-main>
      <tool-bar></tool-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar'
import ToolBar from '@/components/ToolBar'

export default {
  name: 'App',
  components: {
    SideBar,
    ToolBar
  }
}
</script>

<style>
  .v-navigation-drawer__img img {
    opacity: 0.25;
  }
</style>
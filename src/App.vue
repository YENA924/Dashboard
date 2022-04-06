<template>
  <v-app>
    <v-navigation-drawer
      app
      :image="require('@/assets/bg-navigation-menu.png')"
    >
      <side-bar></side-bar>
    </v-navigation-drawer>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <!-- <v-container fluid> -->
        <!-- If using vue-router -->
        <!-- <router-view></router-view>
      </v-container> -->
      <tool-bar></tool-bar>
      <main-contents></main-contents>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar'
import ToolBar from '@/components/ToolBar'
import MainContents from '@/components/MainContents'

export default {
  name: 'App',
  components: {
    SideBar,
    ToolBar,
    MainContents
  }
}
</script>

<style>
  .v-navigation-drawer__img img {
    opacity: 0.25;
  }
</style>
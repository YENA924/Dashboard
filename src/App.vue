<template>
  <v-app>
    <v-navigation-drawer
      app
      :image="require('@/assets/bg-navigation-menu.png')"
    >
      <side-bar />
    </v-navigation-drawer>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <!-- <v-container fluid> -->
        <!-- If using vue-router -->
        <!-- <router-view></router-view>
      </v-container> -->
      <tool-bar />
      <MainContents />
    </v-main>
  </v-app>
</template>

<script>
import MainContents from '@/components/MainContents'
import SideBar from '@/components/SideBar'
import ToolBar from '@/components/ToolBar'

export default {
  name: 'App',
  components: {
    MainContents,
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
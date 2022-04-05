<template>
  <v-app>
    <side-bar />
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
import MainContents from '@/components/MainContents.vue'
import SideBar from '@/components/SideBar.vue'
import ToolBar from '@/components/ToolBar.vue'

export default {
  name: 'App',
  components: {
    MainContents,
    SideBar,
    ToolBar
  }
}
</script>
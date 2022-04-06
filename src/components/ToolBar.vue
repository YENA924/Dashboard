<template>
  <v-toolbar
    color="#65C18C"
  >
    <v-toolbar-title>Dashboard</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu
      activator="#toolbar__search"
      :close-on-content-click="true"
    >
      <template v-slot:activator>
        <ev-text-field
          v-model="searchText"
          id="toolbar__search"
          placehoder="Search..."
          type="text"
          clearable
        >
        </ev-text-field>
      </template>
      <v-card max-height="200">
        <v-list>
          <v-list-item
            v-for="(item, index) in searchItems"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-btn icon>
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'ToolBar',
  setup () {
    const searchText = ref()
    const searchItems = [
      { id: 0, title: '치킨' },
      { id: 1, title: '떡볶이' },
      { id: 2, title: '햄버거' },
      { id: 3, title: '피자' },
      { id: 3, title: '갈비탕' },
      { id: 3, title: '육개장' },
      { id: 3, title: '파스타' },
      { id: 3, title: '김밥' }
    ]

    return {
      searchText,
      searchItems
    }
  }
}
</script>

<style>
  .ev-text-field.clearable .ev-input {
    border-width: 0 0 2px;
    border-radius: 0;
    border-color: #ffffff;
  }

  .ev-text-field.clearable:hover .ev-input,
  .ev-text-field.clearable:focus .ev-input {
    border-width: 0 0 2px;
    border-radius: 0;
    border-color: #ffffff;
  }
  .ev-text-field.clearable .ev-input:hover,
  .ev-text-field.clearable .ev-input:focus {
    border-width: 0 0 2px;
    border-radius: 0;
    border-color: #ffffff;
  }

  .ev-icon-error {
    color: #ffffff
  }
</style>
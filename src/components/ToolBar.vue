<template>
  <v-toolbar
    color="#65C18C"
  >
    <v-toolbar-title>Dashboard</v-toolbar-title>

    <v-spacer></v-spacer>

    <ev-text-field
      v-model="searchText"
      id="toolbar__search"
      placehoder="Search..."
      type="text"
      clearable
    >
    </ev-text-field>
    <v-menu activator="#toolbar__search">
      <v-list>
        <v-list-item
          v-for="(item, index) in searchItems"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
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
    const searchText = ref('')
    const searchItems = [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
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
<template>
  <v-col
    v-for="(grid, index) in gridData"
    :key="index"
    cols="12"
    md="6"
  >
    <v-card>
      <v-card-title>{{ grid.title }}</v-card-title>
      <v-card-subtitle>{{ grid.subTitle }}</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <ev-grid
              v-model:selected="selected"
              v-model:checked="checked"
              :columns="grid.columns"
              :rows="grid.tableData"
              :width="grid.widthMV"
              :height="grid.heightMV"
            ></ev-grid>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'DashBoardGrid',
  props: {
    gridData: {
      type: Array,
      required: true
    }
  },
  setup () {
    const selected = ref([]);
    const checked = ref([])

    return {
      selected,
      checked
    }
  }
}
</script>

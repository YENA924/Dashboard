<template>
  <v-col cols="12" md="6">
    <v-card>
      <v-card-title>{{ tabGrid.title }}</v-card-title>
      <v-card-subtitle
        class="justify-md-space-between"
      >
        <ev-button
          v-for="(tab, index) in tabGrid.tabItems"
          :key="index"
        >
           <i :class="tab.icon"/>{{ tab.title }}
        </ev-button>
      </v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <ev-grid
              v-model:selected="selected"
              v-model:checked="checked"
              :columns="tabContents.columns"
              :rows="tabContents.tableData"
              :width="tabContents.widthMV"
              :height="tabContents.heightMV"
              :option="tabContents.option"
            >
              <template #inputNumber="{ item }">
                <ev-input-number
                  v-model="item.row[2][item.column.index]"
                  :max="100"
                  :min="0"
                />
              </template>
            </ev-grid>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import tabGridJsonData from '@/data/TabGridJsonData.json'
import { ref } from 'vue'

export default {
  name: 'DashBoardTabGrid',
  setup () {
    const tabGrid = tabGridJsonData
    const tabContents = tabGridJsonData.tabContents
    const selected = ref([])
    const checked = ref([])

    return {
      tabGrid,
      tabContents,
      selected,
      checked
    }
  }
}
</script>

<template>
  <v-col cols="12" md="6">
    <v-card>
      <v-card-title>{{ tabGrid.title }}</v-card-title>
      <v-card-subtitle>
        <ev-button-group>
          <ev-button
            v-for="(tab, index) in tabGrid.tabItems"
            v-bind="selectedTab"
            v-model="selectedTab"
            :key="index"
            :auto-focus="true"
            :type="selectedTab.title === tab.title ? 'primary' : 'ghost'"
            size="large"
            @click="onClickTab(tab)"
          >
            <i :class="tab.icon"/> {{ tab.title }}
          </ev-button>
        </ev-button-group>
      </v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <ev-grid
              v-model:selected="selected"
              v-model:checked="checked"
              :columns="tabGridProps.columns"
              :rows="tabContents[selectedTab.title]"
              :width="tabGridProps.widthMV"
              :height="tabGridProps.heightMV"
              :option="tabGridProps.option"
            >    
              <template #gridButton>
                <ev-button
                  type="text"
                  size="small"
                >
                  <ev-icon icon="ev-icon-edit" />
                </ev-button>
                <ev-button
                  type="text"
                  size="small"
                >
                  <ev-icon icon="ev-icon-close2" />
                </ev-button>
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
    const tabGridProps = tabGridJsonData.props
    const selected = ref([])
    const checked = ref([])
    let selectedTab = ref(tabGridJsonData.tabItems[0])

    const onClickTab = (tab) => {
      selectedTab.value = tab
    }

    return {
      selectedTab,
      tabGrid,
      tabContents,
      tabGridProps,
      selected,
      checked,
      onClickTab
    }
  }
}
</script>

<template>
  <v-col cols="12" md="6">
    <v-card>
      <v-card-title>타이틀</v-card-title>
      <v-card-subtitle>서브 타이틀</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <ev-grid
              v-model:selected="selected"
              v-model:checked="checked"
              :columns="columns"
              :rows="tableData"
              :width="widthMV"
              :height="heightMV"
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
  setup () {
    const tableData = ref([]);
    const selected = ref([]);
    const checked = ref([]);
    const widthMV = ref('100%');
    const heightMV = ref(300);
    const columns = ref([
      { caption: 'Name', field: 'userName', type: 'string', width: 80 },
      { caption: 'Role', field: 'role', type: 'string', width: 100 },
      { caption: 'Phone', field: 'phone', type: 'string', sortable: false },
      { caption: 'Email', field: 'email', type: 'string', width: 200 },
      { caption: 'Last Login', field: 'lastLogin', type: 'string' },
    ]);

    return {
      tableData,
      selected,
      checked,
      widthMV,
      heightMV,
      columns
    }
  }
}
</script>

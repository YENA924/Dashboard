<template>
  <v-col
    v-for="(iconData, index) in iconJsonData"
    :key="index"
    cols="12"
    md="3"
  >
    <v-card
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-avatar>
          <ev-icon icon="ev-icon-user" />
        </v-list-item-avatar>
        <v-list-item-title class="text-h5">
          {{ iconData.title }}
        </v-list-item-title>
        <v-list-item-content>
          <div class="mb-4">
          {{ iconData.contents }}
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>

export default {
  name: 'DashBoardIcon',
  props: {
    iconJsonData: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <v-col
    v-for="(icon, index) in iconData"
    :key="index"
    cols="12"
    md="3"
  >
    <v-card
      class="mx-auto"
      tile
    >
      <v-list-item three-line>
        <v-list-item-avatar start>
          <ev-icon icon="ev-icon-user" />
        </v-list-item-avatar>
        <v-list-item-title>
          {{ icon.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ icon.contents }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>
import iconJsonData from '@/data/iconJsonData.json'

export default {
  name: 'DashBoardIcon',
  setup () {
    const iconData = iconJsonData

    return {
      iconData
    }
  }
}
</script>

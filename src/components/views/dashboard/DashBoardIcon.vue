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
      <v-list-item>
        <v-list-item-header>
          <v-list-item-title>
            <v-list-item-avatar start>
              <ev-icon :icon="icon.thumbnail" size="large" />
            </v-list-item-avatar>
            {{ icon.title }}
          </v-list-item-title>
          <v-list-item-subtitle class="d-flex justify-end text-h5">{{ icon.contents }}</v-list-item-subtitle>
        </v-list-item-header>
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

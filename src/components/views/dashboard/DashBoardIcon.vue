<template>
  <v-col
    v-for="(icon, index) in iconData"
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
          {{ icon.title }}
        </v-list-item-title>
        <v-list-item-content>
          {{ icon.contents }}
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-col>
</template>

<script>

export default {
  name: 'DashBoardIcon',
  props: {
    iconData: {
      type: Array,
      required: true
    }
  }
}
</script>

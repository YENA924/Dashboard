<template>
  <v-col cols="12" md="4">
    <v-card
      :prepend-avatar="require('@/assets/avatar.png')"
      title="WANG YE-NA"
      subtitle="Front-End Developer"
    >
      <v-card-text>
        <div>Hello world!</div>
        <p class="text-h4 text--primary">
          el·ee·mos·y·nar·y
        </p>
        <p>adjective</p>
        <div class="text--primary">
          relating to or dependent on charity; charitable.<br>
          "an eleemosynary educational institution."
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn  
          color="teal-accent-4"
        >
          Follow
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>

export default {
  name: 'UserInfo'
}
</script>

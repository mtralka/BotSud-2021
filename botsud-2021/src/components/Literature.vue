<template>
  <v-col cols="12">
    <v-card tile elevation="4" v-once>
      <v-card-title class="text-left text-h4">
        {{ literature.title }}
      </v-card-title>
      <v-card-text class="text-body-1 text-justify">
        <p v-for="(item, idx) in literature.body" :key="idx" dense>
          {{ item }}
        </p>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Literature",
  props: {
    literature: Object,
  },
};
</script>
<template>
  <v-col cols="12">
    <v-card tile elevation="4" v-once>
      <v-card-title class="text-left text-h4">
        {{ method.title }}
      </v-card-title>
      <v-card-text class="text-body-1 text-justify">
        {{ method.body }}</v-card-text
      >
      <v-tooltip right>
        <template v-slot:activator="{ on, attrs }">
          <v-img
            v-bind="attrs"
            v-on="on"
            :src="require(`@/assets/${method.image}`)"
            :alt="method.imageCaption"
            contain
            max-width="400"
            class="mx-auto py-4"
          ></v-img>
          <figcaption style="display: none">
            {{ method.imageCaption }}
          </figcaption>
        </template>
        <span>
          {{ method.imageCaption }}
        </span>
      </v-tooltip>

      <v-card-text class="text-body-1 text-justify">
        {{ method.body2 }}</v-card-text
      >
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "Methods",
  props: {
    method: Object,
  },
};
</script>
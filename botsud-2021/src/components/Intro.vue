<template>
  <v-col cols="12">
    <v-card tile elevation="4" v-once>
      <v-card-title class="text-left text-h4">
        {{ introduction.title }}
      </v-card-title>
      <v-card-text class="text-body-1 text-justify">
        {{ introduction.body }}

        <v-list-item v-for="(item, idx) in introduction.objectives" :key="idx">
          <v-list-item-content>
            <v-list-item-title> {{ item }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Intro",
  props: {
    introduction: Object,
  },
};
</script>
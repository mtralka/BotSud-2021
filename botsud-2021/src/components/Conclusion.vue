<template>
  <v-col cols="12">
    <v-card tile elevation="4" v-once>
      <v-card-title class="text-left text-h4">
        {{ conclusion.title }}
      </v-card-title>
      <v-card-text v-html="conclusion.body" class="text-body-1 text-justify">
        {{ conclusion.body }}</v-card-text
      >
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Conclusion",
  props: {
    conclusion: Object,
  },
};
</script>
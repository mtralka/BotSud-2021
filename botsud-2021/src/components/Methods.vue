<template>
  <v-col cols="12">
    <v-card tile elevation="4" v-once>
      <v-card-title class="text-left text-h4">
        {{ method.title }}
      </v-card-title>
      <v-card-text class="text-body-1 text-justify">
        {{ method.body }}</v-card-text
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
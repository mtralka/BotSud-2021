<template>
  <v-col cols="12">
    <v-card tile elevation="4" v-once>
      <v-card-title class="text-left text-h4">
        {{ appendix.title }}
      </v-card-title>

      <v-card-text class="text-body-1 text-justify">
        <v-data-table
          :headers="headers"
          :items="items"
          item-key="name"
          class="elevation-1"
        ></v-data-table>
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "Appendix",
  props: {
    appendix: Object,
  },
  computed: {
    headers() {
      return this.appendix?.headers;
    },
    items() {
      return this.appendix?.items;
    },
  },
};
</script>
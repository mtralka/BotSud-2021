<template>
  <v-col cols="12" v-once>
    <!-- TITLE -->
    <div class="text-left">
      <h1 class="text-h4 mb-3">
        {{ basicInfo.title }}
      </h1>
      <h2
        class="subtitle-1 pt-2"
        v-for="(author, idx) in basicInfo.authors"
        :key="author.name"
        style="display: inline"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on"> {{ author.name }} </span>
            <span v-if="basicInfo.authors[idx + 1]" class="secondary--text">
              |
            </span>
          </template>
          <span>
            {{ author.affiliation }}
          </span>
        </v-tooltip>
      </h2>
    </div>
  </v-col>
</template>

<script>
export default {
  name: "Header",
  props: {
    basicInfo: Object,
  },
};
</script>
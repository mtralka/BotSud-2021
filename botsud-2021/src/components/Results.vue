<template>
  <v-col cols="12">
    <v-card tile elevation="4" v-once>
      <v-card-title class="text-left text-h4">
        {{ results.title }}
      </v-card-title>
      <v-expansion-panels flat popout focusable>
        <v-expansion-panel v-for="(item, idx) in results.body" :key="idx">
          <v-expansion-panel-header
            class="font-weight-bold text-subtitle-1 primary--text"
          >
            {{ item.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="text-justify">
            <div v-if="item.image">
              <v-tooltip right>
                <template v-slot:activator="{ on, attrs }">
                  <v-img
                    v-bind="attrs"
                    v-on="on"
                    :src="require(`@/assets/${item.image}`)"
                    :alt="item.imageCaption"
                    contain
                    max-width="400"
                    class="mx-auto py-4"
                  ></v-img>
                  <figcaption style="display: none">
                    {{ item.imageCaption }}
                  </figcaption>
                </template>
                <span>
                  {{ item.imageCaption }}
                </span>
              </v-tooltip>
            </div>
            {{ item.body }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "Results",
  props: {
    results: Object,
  },
};
</script>
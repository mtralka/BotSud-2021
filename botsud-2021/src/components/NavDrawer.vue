<template>
  <v-navigation-drawer permanent expand-on-hover app floating clipped>
    <v-list nav dense>
      <router-link to="/">
        <v-list-item
          link
          v-for="(section, idx) in sections"
          :key="idx"
          style="text-decoration: none"
        >
          <v-list-item-icon>
            <span class="text-h6 font-weight-bold"
              >{{ section.charAt(0).toUpperCase() }}.</span
            >
            <!-- <v-icon>{{ content[section].icon || "mdi-folder" }} </v-icon> -->
          </v-list-item-icon>
          <v-list-item-title>{{ content[section].title }}</v-list-item-title>
        </v-list-item>
      </router-link>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="(author, idx) in authors" :key="idx" class="px-2">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>
        <v-list-item-content two-lined>
          <v-list-item-title class="title primary--text">
            {{ author.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="secondary--text">
            {{ author.email }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavDrawer",
  props: {
    content: Object,
  },
  computed: {
    authors() {
      return this.content.basicInfo.authors;
    },
    sections() {
      return this.content.basicInfo.sections;
    },
  },
};
</script>
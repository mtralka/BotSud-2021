<template>
  <v-app>
    <v-app-bar app color="primary" dark clipped-left>
      <router-link to="/">
        <v-btn text dark>
          <span class="d-flex align-left text-h5">BotSud 2021</span>
        </v-btn>
      </router-link>
      <v-spacer></v-spacer>

      <router-link to="/" v-if="!isHome()">
        <v-btn text color="secondary">
          <span class="mr-2">Home</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </router-link>

      <router-link to="/map" v-if="isHome()">
        <v-btn text color="secondary">
          <span class="mr-2">Interactive Map</span>
          <v-icon>mdi-map</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
    <NavDrawer :content="content" v-if="isHome()" />
    <v-main>
      <router-view />
    </v-main>
    <v-footer app padless absolute>
      <v-card flat tile width="100vw" class="primary text-center">
        <v-card-text class="secondary--text">
          {{ content.basicInfo.year }} —
          <strong>{{ authorLastNames }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<script>
import content from "./assets/content";
import NavDrawer from "./components/NavDrawer";
export default {
  name: "App",

  components: {
    NavDrawer,
  },

  data: () => ({
    content: content.content,
  }),

  computed: {
    authorLastNames: function () {
      const authors = this.content.basicInfo.authors;
      const fullNames = [];
      const lastNames = [];
      authors.forEach((author) => {
        fullNames.push(author.name);
      });
      fullNames.forEach((name) => {
        const split = name.split(" ");
        lastNames.push(split[split.length - 1]);
      });
      return lastNames.join(", ");
    },
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    isHome() {
      if (this.currentRouteName === "Home") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

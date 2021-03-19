<template>
  <v-container>
    <v-row class="text-center">
      <v-col col="auto">
        <Header :basicInfo="content.basicInfo" />
        <Intro :introduction="content.introduction" />
        <Methods :method="content.method" />
        <Results :results="content.results" />
        <Conclusion :conclusion="content.conclusion" />
        <Appendix :appendix="content.appendix" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Header from "../components/Header";
import Intro from "../components/Intro";
import Methods from "../components/Methods";
import Results from "../components/Results";
import Conclusion from "../components/Conclusion";
import content from "../assets/content";
import Appendix from "../components/Appendix";
import NavDrawer from "../components/NavDrawer";

export default {
  name: "Home",
  components: {
    Header,
    Intro,
    Methods,
    Results,
    Conclusion,
    Appendix,
    NavDrawer,
  },

  data: () => ({
    content: content.content,
  }),
};
</script>

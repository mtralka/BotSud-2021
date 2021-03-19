<template>
  <v-container>
    <v-row class="text-center">
      <v-col col="auto">
        <Header :basicInfo="content.basicInfo" />
        <Intro id="introduction" :introduction="content.introduction" />
        <Methods id="methods" :method="content.method" />
        <Results id="results" :results="content.results" />
        <Conclusion id="conclusion" :conclusion="content.conclusion" />
        <Literature id="literature" :literature="content.literature" />
        <Appendix
          id="appendix"
          :appendix="content.appendix"
          v-if="content.appendix.body"
        />
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
import Literature from "../components/Literature";

export default {
  name: "Home",
  components: {
    Header,
    Intro,
    Methods,
    Results,
    Conclusion,
    Appendix,
    Literature,
  },

  data: () => ({
    content: content.content,
  }),
};
</script>

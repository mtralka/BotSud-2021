<template>
  <v-container>
    <v-row class="text-center">
      <v-col col="auto">
        <Header v-if="content.basicInfo" :basicInfo="content.basicInfo" />
        <Intro
          id="introduction"
          v-if="content.introduction"
          :introduction="content.introduction"
        />
        <Methods id="methods" v-if="content.method" :method="content.method" />
        <Results
          id="results"
          v-if="content.results"
          :results="content.results"
        />
        <Conclusion
          id="conclusion"
          v-if="content.conclusion"
          :conclusion="content.conclusion"
        />
        <Literature
          id="literature"
          v-if="content.literature"
          :literature="content.literature"
        />
        <Appendix
          id="appendix"
          :appendix="content.appendix"
          v-if="content.appendix"
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

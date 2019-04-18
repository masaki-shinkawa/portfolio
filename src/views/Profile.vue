<template>
  <section>
    <v-layout justify-center>
      <v-flex xs12 md8 py-5>
        <v-card>
          <v-card-title class="blue">
            <v-layout row wrap justify-center>
              <v-flex xs12>
                <h1 class="text--align--center">Masaki Shinkawa</h1>
              </v-flex>
              <v-flex xs12>
                <h3 class="text--align--center">
                  ({{ age.year }}歳 {{ age.month }}ヶ月 {{ age.date }}日)
                </h3>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text>
            <template v-for="(line, i) in getSelfIntroduction">
              <p :key="i">{{ line }}</p>
            </template>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex md10 offset-md1>
        <v-card>
          <v-card-title class="blue py-2">
            <v-layout justify-center>
              <h1>職務経歴</h1>
            </v-layout>
          </v-card-title>
        </v-card>
        <v-timeline :dense="isSp" align-top class="timeline">
          <v-timeline-item
            v-for="(career, i) in getCareer"
            :key="i"
            :color="career.color"
            :icon="career.icon"
            fill-dot
            small
          >
            <v-card :color="career.color" dark>
              <v-layout row align-center class="avatar">
                <v-avatar v-if="career.avatar">
                  <img :src="career.avatar" />
                </v-avatar>
                <v-card-title class="title">
                  <span>{{ career.title }}</span>
                </v-card-title>
              </v-layout>
              <v-card-text class="white text--primary">
                <p>
                  {{ career.period }}
                </p>
                <p>
                  {{ career.text }}
                </p>
              </v-card-text>
              <v-card-actions>
                <v-flex>
                  <template v-for="(skill, i) in career.skills">
                    <v-chip :key="i" color="accent">{{ skill }}</v-chip>
                  </template>
                </v-flex>
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import moment from "moment";

export default {
  data: () => {
    return {
      dense: false,
      age: {}
    };
  },
  computed: {
    ...mapState(["isSp"]),
    ...mapGetters(["getCareer", "getSelfIntroduction"])
  },
  created() {
    const diff = moment().diff(moment([1990, 3, 3]), "millisecond");
    const age = moment(diff).subtract(1970, "year");
    this.age = {
      year: age.year(),
      month: age.month() + 1,
      date: age.date()
    };
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  padding-left: 16px;
}
.v-chip {
  margin: 2px;
}
.text--align--center {
  text-align: center;
}
.v-card__title {
  color: white;
}
</style>

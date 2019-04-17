<template>
  <section>
    <v-layout row wrap>
      <v-flex md10 offset-md1>
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

export default {
  data: () => {
    return {
      dense: false
    };
  },
  computed: {
    ...mapState(["isSp"]),
    ...mapGetters(["getCareer"])
  },
  created() {
    this.$store.dispatch("setCareerBind");
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
</style>
